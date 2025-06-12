
ChattingMeItem = class ChattingMeItem extends AView
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
		super.onInitDone()

		//TODO:edit here

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}

    setData(data)
    {
        // 서버에 있는 기존 내용 가져오기
        this.meContent.setText(data.content);
        // 추가된 메시지 내용 적용
        this.meContent.setText(data.message);
        this.meTime.setText(data.time);
        this.data = data;
    }

}

