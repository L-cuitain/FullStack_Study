$(function () {

    //初始化fullpage
    $('#fullpage').fullpage({
        //设置背景颜色
        sectionsColor: ['#fadd67', '#84a2d4', '#ef674d'],
        //设置是否显示圆点导航
        navigation: true,
        //滚动速度
        scrollingSpeed: 1500,
        //使用键盘播放
        keyborderScrolling: true,
        //滚动到某一屏后的回调函数
        //参数: 
        //anchorLink 锚链接的名称
        //index  序号 从1开始计算
        afterLoad: function (anchorLink, index) {
            //点击小圆点 播放下一张图片
            $('.next').click(function () {
                $.fn.fullpage.moveSectionDown();
            })

            //点击再来一次 返回第一层
            $('.again').click(function () {
                $.fn.fullpage.moveTo(1);
            })

        },
        //滚动前的回调函数 
        //参数:
        //index 离开的页面索引
        //nextIndex 滚动到页面的索引
        //direction 判断向上滚动或向下滚动
        onLeave: function (index, nextIndex, direction) {
            //向下图片的淡出
            $('.next').fadeOut();
            switch (nextIndex) {
                //第一张图片动画
                case 1:
                    //向下图片淡出
                    $('.next').fadeIn();
                    break;

                    //第二张图片动画
                case 2:
                    //搜索框从右向左移动
                    $('.search').show().animate({
                        right: 370
                    }, 1500, function () {
                        //沙发文字显示
                        $('.search-words').animate({
                            'opacity': 1
                        }, 200, function () {
                            //设置定时器
                            setTimeout(function () {
                                //隐藏搜索框 和顶部文字
                                $('.search').hide();
                                $('.section2-text-1').hide();
                                //显示搜索框
                                $('.search-input').show().animate({
                                    bottom: 452,
                                    right: 250,
                                    height: 30
                                }, 1000);
                                //显示商品
                                $('.search-sofes').show().animate({
                                    height: 218
                                }, 1000);
                                //顶部文字显示
                                $('.section2-text-2').animate({
                                    opacity: 1
                                }, 1000, function () {
                                    //向下图片淡入
                                    $('.next').fadeIn();
                                })
                            }, 500)
                        })
                    })
                    break;
                    //第三张图片动画    
                case 3:
                    //沙发下滑动画
                    $('.search-sofe').show().animate({
                        bottom: -504,
                        left: 260,
                        width: 207,
                        height: 166
                    }, 1000, function () {
                        //执行下滑动画后隐藏
                        $(this).hide();
                        //第三张图片的沙发添加显示动画
                        $('.section3-sofe').show(0, function () {
                            //添加定时器
                            setTimeout(function () {
                                //显示被标记的颜色
                                $('.img-03-a').show();
                                $('.btn-03-a').show();
                                //下滑图片淡入
                                $('.next').fadeIn();
                            }, 500)
                        })
                    })
                    break;
                    //第四张图片动画
                case 4:
                    //沙发下滑
                    $('.section3-sofe-down').show().animate({
                        bottom: -540,
                        left: 220
                    }, 1000, function () {
                        //隐藏沙发
                        $(this).hide();
                        //显示购物车的沙发
                        $('.shirt-04').show();
                        $('.cart').animate({
                            left: 1800
                        }, 1000, function () {
                            $('.word-04-1').fadeOut();
                            $('.word-04-2').fadeIn();
                            $('.note').animate({
                                opacity: 1
                            }, 1000, function () {
                                $('.word-04').animate({
                                    top: -211
                                }, 500, function () {
                                    $('.word-04').animate({
                                        opacity: 1
                                    }, 500)
                                    $('.next').fadeIn();
                                })
                            });
                        })
                    })
                    break;
                    //第五张图片动画
                case 5:
                    $('.shirt-05').show().animate({
                        top: 400
                    }, 1000, function () {
                        $('.hand-05').show().animate({
                            top: 390
                        }, 500)
                        $('.shirt-05-1').show().animate({
                            bottom: 70
                        }, 500)
                        $('.order-05').animate({
                            top: 230
                        }, 500)
                    })
                    break;

                    //第六张图片
                case 6:
                    // 沙发下滑
                    $('.shirt-05-2').show().animate({
                        left: "40%",
                        bottom: -253,
                        width: 65
                    }, 1000);

                    $('.box-06').animate({
                        left: 600
                    }, 1000, function () {
                        $('.shirt-05-2').hide();
                        $(this).animate({
                            bottom: 40
                        }, 1000, function () {
                            $(this).animate({
                                bottom: 35,
                                width: 15
                            }, function () {
                                $(this).hide();
                                $('.pop-06-2').show();
                                $('.words-06-1').animate({
                                    opacity: 0
                                }, 1000)
                                $('.section6').animate({
                                    'backgroundPositionX': '100%'
                                }, 3000, function () {
                                    $('.words-06-2').show();
                                    $('.boy-06').show().animate({
                                        bottom: 116,
                                        height: 305
                                    }, 2000, function () {
                                        $(this).animate({
                                            right: 480
                                        }, 2000, function () {
                                            $('.pop-06-3').show();
                                            $('.door-06').show(0, function () {
                                                $('.girl-06').show().animate({
                                                    bottom: 116,
                                                    height: 305,
                                                    right: 360
                                                }, 2000)
                                                $('.next').fadeIn();
                                            })
                                        })
                                    })
                                })
                            });
                        })
                    })
                    break;

                    //第七张图片
                case 7:
                    $('.star').animate({
                        width: 121
                    }, 1000, function () {
                        $('.good-07').show(1000);
                        $('.next').fadeIn();
                    })
                    break;


                    //第八张图片
                case 8:

                    $(document).on('mousemove', function (e) {
                        //获取鼠标x轴坐标
                        let x = e.pageX + 15;
                        let y = e.pageY + 10;
                        let handH = $(document).height() - 449;

                        //  console.log(x);
                        if (y < handH) {
                            $('.hand-08').css({
                                left: x,
                                top: handH
                            });
                        } else {
                            $('.hand-08').css({
                                left: x,
                                top: y
                            });
                        }
                    })

                    $(".btn-08").hover(function () {
                        $(".btn-08-1, .btn-08-2").toggle();
                    })

                    break;
            }
        },
    });
})