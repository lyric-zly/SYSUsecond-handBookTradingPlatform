我基本上按照router上写的，具体页面还是再说明一下：

    1.import Home from '@/pages/home/index';
home下的index.vue是主界面，但已经包括了排序筛选按钮和书籍列表
目前还没解决的是中间list部分滑动会有问题，底部和顶部不能固定在屏幕上，会跟着一起滑走
    2.import BookList from '@/pages/home/book-list/index';
booklist文件夹下面放的其实是筛选界面（有很多可以选择的标签这样）
这个界面还不是很完善
    3.import Message from '@/pages/home/message/index';
message目前下面其实放了两个，一个是对话的列表，一个是通知的列表，后面需要的话我看看能不能合起来。
问题同主页