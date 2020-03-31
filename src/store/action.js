export default {
    saveUserName(context,username){
        context.commit('saveUserName',username);
    },
    savecartCount(context, cartCount) {
        context.commit('savecartCount', cartCount);
    }
}