
ChattingContent = class ChattingContent extends AView
{
	constructor()
	{
		super()

		//TODO:edit here

	}

	init(context, evtListener)
	{
		super.init(context, evtListener)

		this.listData = [
            { 
              name : '안녕하세요'
            },
        ]

	}

	onInitDone()
	{
		super.onInitDone()

        // 리스트뷰에 두 개의 아이템 추가
		this.contentList.addItem('Source/chatting/chatItem/ChattingMeItem.lay', this.listData);
		this.contentList.addItem('Source/chatting/chatItem/ChattingUserItem.lay', this.listData);
	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}


	onChattingCancleClick(comp, info, e)
    {
        // 윈도우 창 닫기
        this.getContainer().close();
    }
}

