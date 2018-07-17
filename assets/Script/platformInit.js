// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

const getRandomInt = function (min, max) {
    var ratio = cc.random0To1();
    return min + Math.floor((max - min)*ratio);
}

cc.Class({
    extends: cc.Component,

    properties: {
        //节点
        platform : cc.Sprite,

        //草地资源图片
        platformSF : {
            default : [],
            type : cc.SpriteFrame,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.init();

        var move = cc.moveBy(3, cc.p(-(cc.winSize.width + this.size.width), 0));
        var remove = cc.callFunc(this.removePlatform,this);
        var seq = cc.sequence(move, remove);
        this.node.runAction(seq);
    },

    init : function () {
        var randIndexSF = getRandomInt(0,this.platformSF.length);
        this.platform.spriteFrame = this.platformSF[randIndexSF];

        this.size = this.node.getContentSize();
        var randIndexY = cc.randomMinus1To1()*(cc.winSize.height/2);
        console.log("randIndexSF : " + randIndexSF);
        console.log("randIndexY : " + randIndexY);
        console.log("size : " + this.size);
        console.log(this.node);
        this.node.position = cc.v2(cc.winSize.width/2 + this.size.width/2, randIndexY);
        console.log(this.node.position);
    },

    removePlatform : function () {
        this.node.removeFromParent();
    }

    // start () {

    // },

    // update (dt) {},
});
