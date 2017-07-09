;;(function($){
  var Dialog = function(opts){
    var self = this;
    this.config = {
      title: '我是配置的标题',
      content: '我是配置的内容的。。。',
      button: null
    };
    // 检查是不是一个纯粹的对象
    if(opts&&$.isPlainObject(opts)){
      $.extend(this.config,opts)
    }
    this.body = $('body');
    this.mask = $('<div class="self-help-dialog">');
    this.wrapper = $('<div class="content-wrapper">');
    this.title = $('<div class="title">我是标题</div>');
    this.content = $('<div class="content">我是内容部分</div>');
    this.buttons = $('<div class="btns">');
    this.create();
  }
  Dialog.prototype = {
    create: function(){
      var self = this;
      var config = this.config;
      var mask = this.mask;
      var wrapper = this.wrapper;
      var title = this.title;
      var content = this.content;
      var buttons = this.buttons;
      body = this.body;
      wrapper.append(title);
      wrapper.append(content);
      if(config.button == null){
        return 
      }else {
        this.createButton(buttons,config.button);
        wrapper.append(buttons);
      }
      mask.append(wrapper);
      body.append(mask);
      if(config.button.length == 0){
        alert(100000)
      }
    },
    createButton: function(buttons,button){
      $(button).each(function(){
        var type = this.type?' class='+this.type:'';
        var text = this.text? this.text: '确定';
        var callback = this.callback?this.callback: null;
        var buttonTemp = $('<span'+type+'>'+text+'</span>');
        buttons.append(buttonTemp);
        
      })
    }
  }
  window.Dialog = Dialog;
})(jQuery)