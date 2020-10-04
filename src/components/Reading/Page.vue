<template>
    <div>
        <el-row >
            <el-col :span="8" style="text-align: center">
                <el-button style="width: 90%" v-on:click="pervious_method">上一页</el-button>
            </el-col>
            <el-col :span="8" style="text-align: center">
                <el-button style="width: 90%" v-on:click="charter_method">目录</el-button>
            </el-col>
            <el-col :span="8" style="text-align: center">
                <el-button style="width: 90%" v-on:click="next_method">下一页</el-button>
            </el-col>
        </el-row>
        <div style="padding-top: 1rem">
            <div v-html="content"></div>
        </div>
        <el-row >
            <el-col :span="8" style="text-align: center">
                <el-button style="width: 90%" v-on:click="pervious_method">上一页</el-button>
            </el-col>
            <el-col :span="8" style="text-align: center">
                <el-button style="width: 90%" v-on:click="charter_method">目录</el-button>
            </el-col>
            <el-col :span="8" style="text-align: center">
                <el-button style="width: 90%" v-on:click="next_method">下一页</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    const axios = require('axios').default;
    export default {
        name: "Page",
        data(){
          return{
              perivouspage:"",
              content:"",
              nextpage:"",
              bookid:""
          }
        },
        methods:{
            next_method:function () {
                var url = "http://89.40.7.18:10000/bookcontent?pageid="+this.nextpage;
                axios.get(url).then(
                    respond=>{
                        let stringcontent =  String(respond.data.data.content);

                        this.content=stringcontent.replaceAll("\n","<br>");
                        this.bookid=respond.data.data.book_id;
                        this.nextpage=respond.data.data.next_id;
                        this.perivouspage=respond.data.data.perivous_id
                    })

            },

            pervious_method:function () {
                var url = "http://89.40.7.18:10000/bookcontent?pageid="+this.perivouspage;
                axios.get(url).then(
                    respond=>{
                        let stringcontent =  String(respond.data.data.content);

                        this.content=stringcontent.replaceAll("\n","<br>");
                        this.bookid=respond.data.data.book_id;
                        this.nextpage=respond.data.data.next_id;
                        this.perivouspage=respond.data.data.perivous_id
                    })

            },

            charter_method:function () {
                this.$router.push({path:'/charter' ,query:{ id: this.bookid }})

            }
        },

        mounted()
        {
            var pageid = this.$route.query.pageid;
            var url = "http://89.40.7.18:10000/bookcontent?pageid="+pageid;
            axios.get(url).then(
                respond=>{
                   let stringcontent =  String(respond.data.data.content);

                    this.content=stringcontent.replaceAll("\n","<br>");
                    this.bookid=respond.data.data.book_id;
                    this.nextpage=respond.data.data.next_id;
                    this.perivouspage=respond.data.data.perivous_id



                }
            )

        }
    }


</script>

<style scoped>

</style>