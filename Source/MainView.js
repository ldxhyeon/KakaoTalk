
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
        this.tabView.addTab('친구', 'Source/friend/frienItemView.lay', 'friend');

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
        
		this.rbm.selectButton(comp);

        this.tabView.selectTabById(comp.getComponentId());

	}
}

