cc.Class({
    extends: cc.Component,

    properties: {
        // label: {
        //     default: null,
        //     type: cc.Label
        // },
        // // defaults, set visually when attaching this script to the Canvas
        // text: 'Hello, World!'

        goldPrefab : cc.Prefab,
        platformPrefab : cc.Prefab,
    },

    // use this for initialization
    onLoad: function () {
        // this.label.string = this.text;
        var gold = cc.instantiate(this.goldPrefab);
        this.node.addChild(gold);

        var platform = cc.instantiate(this.platformPrefab);
        this.node.addChild(platform);
    },
    
    // called every frame
    // update: function (dt) {

    // },
});
