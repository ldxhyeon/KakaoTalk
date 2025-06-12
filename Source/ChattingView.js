
ChattingView = class ChattingView extends AView
{
	constructor()
	{
		super()

		//TODO:edit here

	}

	init(context, evtListener)
	{
		super.init(context, evtListener)

	}

	onInitDone()
	{
		super.onInitDone()

        // 로드 될때 서버에서 리스트 받아오기
        theApp.qm.sendProcessByName('chattingList',this.getContainerId(), null,

        (queryData)=>
        {
            // queryData.printQueryData()
        },
        
        (queryData)=>
        {
            // queryData.printQueryData();

            // // 서버에서 받은 리스트 데이터
            // let listData = queryData.getBlockData('OutBlock1');

            // // 리스트뷰에 받아온 값 추가
            // this.chattingListView.addItem('Source/chatting/ChattingListItem.lay', listData);
        })


	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here
	}


}

