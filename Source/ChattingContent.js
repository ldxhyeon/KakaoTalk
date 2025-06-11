
ChattingContent = class ChattingContent extends AView
{
	constructor()
	{
		super();
	}

	init(context, evtListener)
    {
        super.init(context, evtListener);

        // 채팅 유저 정보
        let data = this.getContainer().getData();
        this.setData(data);

        // console.log(data);

        // // 유저 정보 보내기
        // // this.userInfo = [{
        // //     userName: data.userName,
        // //     userImage: data.userImage
        // // }];
        

       
    }

	async onInitDone()
	{
		super.onInitDone()

        // 로드 될때 서버에서 리스트 받아오기
        theApp.qm.sendProcessByName('ChattingContent',this.getContainerId(), null,

        (queryData)=>
        {
            queryData.printQueryData()
        },
        
        async (queryData)=>
        {
            queryData.printQueryData();

            // 서버에서 받은 리스트 데이터
            this.listData = queryData.getBlockData('OutBlock1');

            for(let i = 0; i < this.listData.length; i++) {
                if(this.listData[i].name != "me") {
                    await this.contentList.addItem('Source/chatting/chatItem/ChattingUserItem.lay', [this.listData[i]]);
                }else {
                    await this.contentList.addItem('Source/chatting/chatItem/ChattingMeItem.lay', [this.listData[i]]);
                }
            }

            // 리스트뷰에 두 개의 아이템 추가
        })
        

        
	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)
	}


    setData(data)
    {
        this.userImg.setImage(data.userImage);
        this.userName.setText(data.userName);

        this.data = data;
    }


	onChattingCancleClick(comp, info, e)
    {
        // 윈도우 창 닫기
        this.getContainer().close();
    }

	

    // 메시지 전송
	onSendMessageClick(comp, info, e)
	{
        // 로드 될때 서버에서 리스트 받아오기
        theApp.qm.sendProcessByName('sendMessage',this.getContainerId(), null,

        (queryData)=>
        {   
            let message = this.messageContent.getText();

            let blockData = queryData.getBlockData('InBlock1')
            blockData[0].message = message;
            

            queryData.printQueryData()
        },
        
        async (queryData)=>
        {
            queryData.printQueryData();
        })
	}
}

