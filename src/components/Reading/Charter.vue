<template>
    <div>
    <el-page-header @back="goBack">
    </el-page-header>

        <div v-for="item in chartercontent" :key="item.page">
            <div style="border-bottom-color: black;border-top-color: black">
            <router-link :to="{path:'/page' ,query:{ pageid: item.page }}" ><span style="font-size: 1.5rem"> {{item.title}}</span></router-link>
            </div>
        </div>

    </div>
</template>

<script>
    const axios = require('axios').default;
    export default {
        name: "Charter",
        data() {
            return {
                chartercontent: [],

            }

        },
        methods:{
            goBack:function ()  {
                this.$router.push("/")
            }

        },
        mounted() {
            var id=this.$route.query.id;
            var url ="http://89.40.7.18:10000/chartherlist?bookid="+id;
            axios.get(url).then(respond=>{
                if(respond.data.staus===0)
                {
                    this.chartercontent= respond.data.data

                }
            }
            )


        }
    }


</script>

<style scoped>

</style>