
MainView = class MainView extends AView
{
	constructor()
	{
		super()

		//TODO:edit here

	}

	init(context, evtListener)
	{
		super.init(context, evtListener)

		//TODO:edit here

	}

	onInitDone()
    {
        super.onInitDone();


        // 탭뷰 설정
        this.tabView.addTab('친구', 'Source/friend/frienItemView.lay', 'friendTab');
        this.tabView.addTab('채팅', 'Source/chatting/ChattingView.lay', 'chatTab');
	    this.tabView.addTab('더보기', 'Source/blank/BlankView.lay', 'moreTab');

        this.tabView.selectTabById('friend').then(tab => {

        });

        // 라디오 버튼 설정
        this.rbm = new RadioBtnManager(this);
        // 처음 로드될때 눌리는 버튼
        this.onTabClick(this.friendTab);

    }


	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}



    // 탭 클릭시 라디오버튼
	onTabClick(comp, info, e)
	{
        
        // 라디오 버튼
		this.rbm.selectButton(comp);

        // 탭 전환
        this.tabView.selectTabById(comp.getComponentId());

	}

}

