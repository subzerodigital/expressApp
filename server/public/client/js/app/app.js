/**
 * Created with JetBrains WebStorm.
 * User: yinanyang
 * Date: 15/09/13
 * Time: 12:45 PM
 * To change this template use File | Settings | File Templates.
 */


Ext.setup({
    onReady:function(){

        var itemTemplate = Ext.create("Ext.XTemplate",$("#sessionItem_tmpl").html(),{});

        var panel = Ext.create("Ext.Panel",{
           tpl:itemTemplate,
           data:{
               sessionName: "Javascript in depth",
               speakerName: "Yinan Yang"
           }
        });

        //Ext.Viewport.add(panel);


        var btnToggle = Ext.create('Ext.Button',{
            text:'Toggle Hidden'
        });

        btnToggle.on({
            tap:function(){
                if(panel.isHidden()){
                    panel.show();
                }else{
                    panel.hide();
                }



                Ext.Msg.alert("Important message");


            }
        });


        Ext.Viewport.add({
           xtype:"container",
           items:[btnToggle,panel],
           padding:15
        });
    }
})
