<template>

    <div v-if="this.content.data">
        <div v-for="item in content.data.data" :key="item.id" style="width: 100%;">

            <el-card>
                <el-row>
                    <el-col :span="12"><img :src="item.image " style="width: 70%;height: 100%"></el-col>

                    <el-col :span="12">
                        <span style="font-size:1.5rem">{{item.name}}</span><br>
                        <span style="font-size:1.5rem">{{item.writer}}</span><br>
                        <router-link :to="{path:'/charter' ,query:{ id: item.id }}"><span style="font-size:1.5rem">点击阅读</span></router-link>

                    </el-col>
                </el-row>
            </el-card>

        </div>


    </div>

</template>

<script>
    export default {
        props: {
            typename: String,
            page: String,
            bookcontent: { data :[]}
        },
        data() {
            return {
                content: this.bookcontent

            }
        },
        mounted() {

        },


        name: "ReadingMain"
    }


</script>

<style scoped>

</style>