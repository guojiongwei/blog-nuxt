const path = require('path');

module.exports = {
    async add_types (ctx, next) {
        console.log('----------------添加文章类型-----------------------');
        ctx.send('result')
    },

    async del_markdown_upload_img (ctx, next) {
        console.log('----------------删除图片 del_markdown_upload_img-----------------------');
        let id = ctx.request.query.id
        try {
            ctx.remove(musicModel, {_id: id})
            ctx.send()
        }catch(e){
            ctx.sendError(e)
        }
        // console.log(id)
    }
}