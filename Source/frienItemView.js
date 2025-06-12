
FrienItemView = class FrienItemView extends AView
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
        theApp.qm.sendProcessByName('userList',this.getContainerId(), null,

        (queryData)=>
        {
            // queryData.printQueryData()
        },
        
        (queryData)=>
        {
            // queryData.printQueryData();

            // 서버에서 받은 리스트 데이터
            // let listData = queryData.getBlockData('OutBlock1');

            // 리스트뷰에 받아온 값 추가
            // this.friendListView.addItem('Source/friend/FriendListItem.lay', listData);
        })

        
	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}



	onAFlexLayoutActiondown(comp, info, e)
    {
        // 1. 모든 .active 클래스 제거 (화면 전체에서)
        document.querySelectorAll('.active').forEach(el => {
            el.classList.remove('active');
        });

        // 2. 현재 클릭한 요소에 active 클래스 추가
        let element = comp.getElement();
        element.classList.add('active');
    }

}

