
ChattingUserItem = class ChattingUserItem extends AView
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

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}

    setData(data)
    {
        this.userImg.setImage(data.image);
        this.userName.setText(data.name);
        this.userContent.setText(data.content);
        this.userTime.setText(data.time);


        this.data = data;
    }

}

