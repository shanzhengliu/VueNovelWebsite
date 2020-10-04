<template>
    <div id="mainNav" v-if="total.length>0">
        <el-tabs v-model="activeName" @tab-click="handleChange">
            <el-tab-pane v-for="index in total" :key=index :label="index" :name="index" :tabindex="index">
                <ReadingMain :typename="index" :bookcontent={} v-if="activeName===index" :ref="activeName"></ReadingMain>
            </el-tab-pane>
        </el-tabs>
        <el-row>
            <el-col :span="12">
                <el-button v-on:click="frontpage" style="width: 100%">上一页</el-button>
            </el-col>
            <el-col :span="12">
                <el-button v-on:click="nextpage" style="width: 100%">下一页</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>


    import ReadingMain from "@/components/Reading/ReadingMain";


    const axios = require('axios').default;
    export default {
        name: "MainPage",


        data() {
            return {
                total: [],
                activeName: "",
                page: "1"

            };

        },
        components: {ReadingMain},

        methods: {
            nextpage:function () {
                this.page=String(parseInt(this.page)+1);

                var url = "http://89.40.7.18:10000/classbooklist?bookclass=" + this.activeName + "&page="+ this.page;
                axios.get(url).then(
                    respond => {
                        this.$refs[this.activeName][0].content = respond
                        window.scrollTo(0,0)
                    }

                )
                // this.$refs[this.activeName][0].page=this.$refs[this.activeName][0].page+1


            },
            frontpage:function(){
                this.page=String(parseInt(this.page)-1);
                if(this.page<1)
                {
                    this.page=1;
                }

                var url = "http://89.40.7.18:10000/classbooklist?bookclass=" + this.activeName + "&page="+ this.page;
                axios.get(url).then(
                    respond => {
                        this.$refs[this.activeName][0].content = respond
                        window.scrollTo(0,0)
                    }

                )

            },

            handleChange:function () {
                var url = "http://89.40.7.18:10000/classbooklist?bookclass=" + this.activeName + "&page=1";
                axios.get(url).then(
                    respond => (this.$refs[this.activeName][0].content = respond)
                )


            }

        },
        mounted() {


            axios.get("http://89.40.7.18:10000/bookclass").then(respond => {
                    if (respond.data.status === 0) {
                        this.total = respond.data.data;
                        this.activeName = respond.data.data[0]  ;
                        var url = "http://89.40.7.18:10000/classbooklist?bookclass=" + this.activeName + "&page="+this.page;
                        axios.get(url).then(
                            respond => (this.$refs[this.activeName][0].content = respond)
                        );


                    }

                }
            );

        }

    }
</script>

<style scoped>

</style>