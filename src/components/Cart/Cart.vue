`<template>
    <div class="cart">
        <div class="cart-left">
            <div class="cart-outer">
                <div class="cart-inner">
                    <i class="iconfont icon-gouwuche"></i>
                </div>
                <div class="count">{{cnt}}</div>
            </div>
        </div>
        <div class="cart-md">
            <strong>￥{{total}}</strong>
            <span>另需配送费￥{{deliveryPrice}}元</span>
        </div>
        <div class="cart-right" v-if='total<minPrice'>
            ￥{{minPrice}}元起送
        </div>
        <div class="carto" v-else='total>=minPrice'>
            去付款
        </div>
        
    </div>
</template>

<script>
import '../../assets/css/font.css'
export default {
    props:{
        CartGoods:{
            type:Array,
        },
        deliveryPrice:Number,
        minPrice:Number,
    },
    computed:{
        cnt(){
            let cnt=0;
            this.CartGoods.forEach(item=>{
                cnt+=item.count;
            });
            return cnt
        },
        total(){
            let tot=0;
            this.CartGoods.forEach(item=>{
                tot+=item.count*item.price
            });
            return tot
        }
    }
}
</script>

<style lang="less" scoped>
    .cart{
        position: fixed;
        width: 100%;
        height: 48px;
        line-height: 48px;
        left : 0;
        bottom: 0;
        background: #141d27;
        color : rgba(255,255,255,.4);
        display: flex;

        .cart-left{
            width: 80px;
            min-width: 80px;
            position: relative;
            .cart-outer{
                width: 56px;
                height: 56px;
                border-radius: 50%;
                position: absolute;
                left : 12px;
                top:-10px;
                background:#141d27;
                .cart-inner {
                    width:44px;
                    height: 44px;
                    border-radius: 50%;
                    position: absolute;
                    left : 6px;
                    top:6px;
                    background: rgba(255, 255, 255, 0.2);
                    text-align: center;
                    line-height: 44px;
                    i {
                        font-size:24px;
                    }
                }
                .count{
                    position: absolute;
                    right : 0;
                    top: 0;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #f00;
                    color:#fff;
                    text-align: center;
                    line-height: 20px;
                }
            }
        }
        .cart-md{
            flex-grow: 1;
            font-size:16px;
            strong {
                font-weight: 700;
                margin-right:12px;
            }
            span {
                border-left: 1px solid rgba(255,255,255,.1);
                padding-left: 12px;
            }
        }
        .cart-right{
            width: 105px;
            min-width: 105px;
            font-size:14px;
            text-align: center;
        }
        .carto{
            background-color: #7b8742;
            width: 105px;
            min-width: 105px;
            font-size:16px;
            color:#fff;
            text-align: center;
        }
    }
</style>
