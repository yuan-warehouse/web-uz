// 头组件
Vue.component('uz-header',{
    template:'<i-header>\
    <i-menu mode="horizontal" theme="light" active-name="1">\
        <div class="layout-logo"><img src="image/logo.png" width=" 30" height="30" /></div>\
        <div class="layout-nav">\
            <menu-item name="1">\
                首页\
            </menu-item>\
            <menu-item name="2">\
                <dropdown>\
                    <a href="javascript:void(0)">\
                        解决方案\
                        <icon type="ios-arrow-down"></icon>\
                    </a>\
                    <dropdown-menu slot="list">\
                        <dropdown-item href="#">飞图 (FiTools) 工控平台软件</dropdown-item>\
                        <dropdown-item href="#">前端开发库</dropdown-item>\
                        <dropdown-item href="#">云服务</dropdown-item>\
                    </dropdown-menu>\
                </dropdown>\
            </menu-item>\
            <menu-item name="3">\
                <dropdown>\
                    <a href="javascript:void(0)">\
                        产品案例\
                        <icon type="ios-arrow-down"></icon>\
                    </a>\
                    <dropdown-menu slot="list">\
                        <dropdown-item href="#">飞图 (FiTools) 工控平台软件</dropdown-item>\
                        <dropdown-item href="#">前端开发库</dropdown-item>\
                        <dropdown-item href="#">云服务</dropdown-item>\
                    </dropdown-menu>\
                </dropdown>\
            </menu-item>\
            <menu-item name="4">\
                我的设备\
            </menu-item>\
            <menu-item name="5">\
                <dropdown>\
                    <a href="javascript:void(0)">\
                        关于我们\
                        <icon type="ios-arrow-down"></icon>\
                    </a>\
                    <dropdown-menu slot="list">\
                        <dropdown-item href="#">飞图 (FiTools) 工控平台软件</dropdown-item>\
                        <dropdown-item href="#">前端开发库</dropdown-item>\
                        <dropdown-item href="#">云服务</dropdown-item>\
                    </dropdown-menu>\
                </dropdown>\
            </menu-item>\
        </div>\
    </i-menu>\
</i-header>'
})

// 脚组件
Vue.component('uz-footer',{
    template:'<i-footer class="layout-footer-center">\
    <row type="flex" justify="space-between" class="code-row-bg">\
        <i-col span="4">\
            <h3><span>解决方案</span></h3>\
            <ul>\
                <li><a href="#home">飞图(FiTools)工控平台软件</a></li>\
                <li><a href="#news">前端开发库</a></li>\
                <li><a href="#contact">云服务</a></li>\
                <li><a href="#about">嵌入式系统</a></li>\
            </ul>\
        </i-col>\
        <i-col span="6">\
            <h3>产品案例</h3>\
            <row>\
                <i-col span="10">\
                    <ul>\
                        <li><a href="Company Profile.html">车架防吊起系统</a></li>\
                        <li><a href="#news">锁扣识别系统</a></li>\
                        <li><a href="#contact">防砸车头系统</a></li>\
                        <li><a href="#about">集装箱堆放异常检测系统</a></li>\
                        <li><a href="#home">集卡对位系统</a></li>\
                        <li><a href="#news">异常/入侵检测系统</a></li>\
                        <li><a href="#contact">轮胎吊大车自动行走系统（AGSS）</a></li>\
                        <li><a href="#about">声纹检测系统（VRS)</a></li>\
                    </ul>\
                </i-col>\
                <i-col span="10">\
                    <ul>\
                        <li><a href="#home">车架防吊起系统</a></li>\
                        <li><a href="#news">锁扣识别系统</a></li>\
                        <li><a href="#contact">防砸车头系统</a></li>\
                        <li><a href="#about">集装箱堆放异常检测系统</a></li>\
                        <li><a href="#home">集卡对位系统</a></li>\
                        <li><a href="#news">异常/入侵检测系统</a></li>\
                        <li><a href="#contact">轮胎吊大车自动行走系统（AGSS）</a></li>\
                        <li><a href="#about">声纹检测系统（VRS)</a></li>\
                    </ul>\
                </i-col>\
            </row>\
        </i-col>\
        <i-col span="4">\
            <h3>关于我们</h3>\
            <ul>\
                <li><a href="#home">飞图(FiTools)工控平台软件</a></li>\
                <li><a href="#news">前端开发库</a></li>\
                <li><a href="#contact">云服务</a></li>\
                <li><a href="#about">嵌入式系统</a></li>\
            </ul>\
        </i-col>\
    </row>\
    <div class="copywright">苏ICP备13037848号-1©常州云众智能科技有限公司版权所有</div>\
</i-footer>'
})