
ChattingListItem = class ChattingListItem extends AView
{
	constructor()
	{
		super()

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
        this.userContent.setText(data.content);
        this.chatDate.setText(data.date);
        this.readCount.setText(data.count);

        // 카운트가 0이면 readCount 요소를 숨깁니다.
		if (data.count == 0) {
			this.readCount.getElement().style.opacity = 0; 
		} else {
			this.readCount.setText(data.count);
			this.readCount.getElement().style.display = ''; 
		}

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


	onListItemDblclick(comp, info, e)
	{
        
        let userName = this.userName.getText();
        let userImage = this.userImg.getImage();

        let userInfo = ({userName, userImage})

		let wnd = new AWindow('chatDetailWindow');
        wnd.setData(userInfo); // 데이터를 설정합니다.
		wnd.openFull('Source/chatting/ChattingContent.lay');


	}
}

