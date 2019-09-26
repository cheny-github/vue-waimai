<template>
    <span class="stars">
        <span 
        class="star"  
        v-for="(bgUrl,index) in starImgUrls"
        :style="{backgroundImage:`url(${bgUrl})`}"
        :key="index"></span>
    </span>
</template>

<script>
export default {
    props:['scoreText']
    ,
    data() {
        return {
            starImgUrls:[]
        }
    },
    beforeMount(){
        this.computeStarCount();
    },
    methods:{
        computeStarCount(){
            const {fullStarUrl, halfStarUrl,emptyStarUrl  } = getStarUrl() 
            const scoreText =this.scoreText
            const fullStar = ~~scoreText
            const halfStar = Math.ceil(scoreText -fullStar)
            const starUrl = []
            for (let i = 0; i < fullStar; i++) {
                starUrl.push(fullStarUrl)
            }
            if (halfStar !== 0 ) {
                starUrl.push(halfStarUrl)
            }
            for (let i = 0; i < 5-fullStar-halfStar; i++) {
                starUrl.push(emptyStarUrl)
            }
            this.starImgUrls = starUrl
    
            // 根据设备像素比获取star的url
            function getStarUrl() {
                const result = {
                    fullStarUrl:undefined,
                    halfStarUrl:undefined,
                    emptyStarUrl:undefined
                };
                switch (true) {
                    case devicePixelRatio>=3:
                        result.fullStarUrl ='/images/stars/star_on@3x.png'
                        result.halfStarUrl ='/images/stars/star_half@3x.png'
                        result.emptyStarUrl ='/images/stars/star_off@3x.png'
                        break;
                    case devicePixelRatio>=2:
                        result.fullStarUrl ='/images/stars/star_on@2x.png'
                        result.halfStarUrl ='/images/stars/star_half@2x.png'
                        result.emptyStarUrl ='/images/stars/star_off@2x.png'
                        break;
                    default :
                        result.fullStarUrl ='/images/stars/star_on.png'
                        result.halfStarUrl ='/images/stars/star_half.png'
                        result.emptyStarUrl ='/images/stars/star_off.png'
                        break;
                }
                return result;
            }
        }
    },
    watch:{
        scoreText(){
            this.computeStarCount();
        }
    }
}
</script>

<style lang="stylus" scoped>
.stars
    display flex
    .star
        height 10px
        width 10px
        font-size 0px
        margin 0 1px
        background url('./images/stars/star_off.png') 
        background-size cover
        @media (-webkit-min-device-pixel-ratio:2),(min-resolution:2)
            background url('./images/stars/star_off@2x.png') 
            background-size cover
        @media (-webkit-min-device-pixel-ratio:3),(min-resolution:3)
            background url('./images/stars/star_off@3x.png') 
            background-size cover
</style>