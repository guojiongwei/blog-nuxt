<template>
	<div class="back-wrapper" @click="back">
        <!-- <Icon name="fanhui" class="back mouse-pointer"></Icon> -->
        <span class="mouse-pointer">Back</span>
    </div>
</template>

<script>
	export default {
        props: {
            path: {
                type: String
            }
        },
		methods: {
			back () {
                if (this.path) {
                    this.$router.push(this.path)
                }else{
                   this.$router.go(-1) 
                }
	        }
		}
	}
</script>

<style lang="scss" scoped>
	.back-wrapper {
		// padding: 20px 0;
        width: 40px;
        height: 40px;
        display: inline-block;
        position: relative;
        z-index: 999;
        border-radius: 50%;
        background: #f9f9f3;
        text-align: center;
        line-height: 40px;
        margin: 20px 0;

        >* {
            vertical-align: middle;
            color: rgba(186,164,119,0.99);
        }

        &:hover {
            .back {
                color: #db5640;
            }
            span {
                color: #db5640;
            }
        }
        .back {
            font-size: 30px;
        }

        span {
            font-size: 12px;
            
        }
    }
</style>