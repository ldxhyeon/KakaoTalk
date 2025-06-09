
FriendListItem = class FriendListItem extends AView
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
        this.userImg.setImage(data.img);
        this.userName.setText(data.name);
        this.userState.setText(data.state);

        this.data = data;
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

