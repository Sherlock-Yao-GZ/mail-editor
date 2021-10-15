import $ from 'zepto-modules';
import toolbarStyle from '../style/toolbar';
import wrapStyle from '../style/wrap';
import contentStyle from '../style/content';
import { EMPTY_P } from '../common/const';

class Editor {
    constructor(selector, options) {
        this.selector = selector;
        this.options = options;
        this.init();
    }

    init() {
        this.initDom();
    }

    // 初始化DOM
    initDom() {

        // 工作栏
        let $toolbarEle = $('<div class="mail-editor-toolbar"></div>');

        for (let [key, style] of Object.entries(toolbarStyle)) {
            $toolbarEle.css(key, style);
        }

        // 编辑器区域
        let $contentWrapEle = $('<div class="mail-editor-content-wrap"></div>');
        let $contentEle = $('<div class="mail-editor-content"></div>');

        for (let [key, style] of Object.entries(wrapStyle)) {
            $contentWrapEle.css(key, style);
        }

        // 挂载元素
        let $selector = $(this.selector);

        // 添加初始元素
        $selector.append($toolbarEle).append($contentWrapEle);

        // 设置基础样式、可编辑
        $contentEle.attr('contenteditable', true);
        for (let [key, style] of Object.entries(contentStyle)) {
            $contentEle.css(key, style);
        }

        $contentWrapEle.append($contentEle);
        
        // 设置placeholder
        let $placeholder = $(`<div class="placeholder">${this.options.placeholder}</div>`);
        $contentWrapEle.append($placeholder);

        $contentEle.append($(EMPTY_P));

        this.$toolbarEle = $toolbarEle;
        this.$contentWrapEle = $contentWrapEle;
        this.$contentEle = $contentEle;
    }
}

export default Editor;