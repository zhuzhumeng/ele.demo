<template>
    <div class="buy">
        <transition name='sub'>
            <div class="sub" v-show="food.count" @click.stop='lessToCart(food)'>
                <i class="iconfont icon-jian"></i>
            </div>
        </transition>
        
        <p v-show="food.count">{{food.count}}</p>
        <div class="add" @click.stop="addToCart(food)">
            <i class="iconfont icon-jia"></i>
        </div>
    </div>
</template>

<script>
export default {
    // $('list').touchmove(console.log('111'));
    props:{
        food : {
            type : Object,
            required : true
        }
    },
    methods : {
        lessToCart(food){
            if(food.count){
                food.count--;
            }
        },
        addToCart(food){
            //判断food中是否存在count属性，如果没有，就添加，如有，就++
            if (food.count) {
                food.count++;
            } else {
                this.$set(this.food,'count',1);
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .sub-enter,.sub-leave-active{opacity: 0;transform:translateX(100%)}
    .sub-leave-active,.sub-enter-active{transition:all 1s;}
    .buy {

        width: 72px;
        height: 24px;
        line-height: 24px;
        position: relative;
        .sub {
            position: absolute;
            left: 0;
            top:0;
        }
        .add{
            position: absolute;
            right: 0;
            top:0;
        }
        .sub i,.add i{
            font-size: 22px;
            color :rgb(0,160,220);
        }
        .add i {
            position: relative;
            top:1px;
        }
        p {
            position: absolute;
            left : 50%;
            transform: translateX(-50%);
            top:2px;
            font-size: 14px;
            color :rgb(147,153,159);
        }
    }
</style>
