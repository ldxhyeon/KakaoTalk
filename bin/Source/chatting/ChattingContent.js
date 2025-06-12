
ChattingContent = class ChattingContent extends AView
{
	constructor()
	{
		super();
	}

	init(context, evtListener)
    {
        super.init(context, evtListener);

        this.sendMessage.enable(false);

        // 채팅 유저 정보
        let data = this.getContainer().getData();
        this.setData(data);
        

        // 유저 정보 보내기
        this.userInfo = [{
            userName: data.userName,
            userImage: data.userImage
        }];



        // 엔터 키 이벤트 리스너 추가
        this.messageContent.get$ele().on('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault(); // 기본 엔터 동작 방지
                this.onSendMessageClick();
            }
        });
       

       
    }

	async onInitDone()
	{
		super.onInitDone()

        // 로드 될때 서버에서 리스트 받아오기
        theApp.qm.sendProcessByName('ChattingContent',this.getContainerId(), null,

        (queryData)=>
        {

            let userInfo = queryData.getBlockData('InBlock1');
            userInfo[0].image = this.data.userImage;
            userInfo[0].name = this.data.userName;


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

            this.contentList.scrollToBottom();

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

            let blockData = queryData.getBlockData('OutBlock1');
            // 메시지 변수
            let myMessage = blockData[0].message;

             // 현재 시간 가져오기
            let now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let period = hours >= 12 ? '오후' : '오전';

            // 12시간제로 변환
            hours = hours % 12;
            hours = hours ? hours : 12; // 0시를 12시로 변환
            minutes = minutes < 10 ? '0' + minutes : minutes;

            let currentTime = `${period} ${hours}:${minutes}`;
            console.log(currentTime);

            // 메시지 있으면 추가하는데
            // data랑 겹치니 message 키 값 설정
            if(myMessage) {
                await this.contentList.addItem('Source/chatting/chatItem/ChattingMeItem.lay', [{ message: myMessage, time: currentTime}]);
            }

            // 보내고 초기화
            this.messageContent.setText('');

            this.contentList.scrollToBottom();
            
        })
	}
    


   


	onMessageContentChange(comp, info, e)
	{

        let content = this.messageContent.getText();

        // 둘 다 비어있지 않으면 버튼 활성화, 아니면 비활성화
        if (content !== '') {
            this.sendMessage.enable(true);  // 버튼 활성화
        } else {
            this.sendMessage.enable(false); // 버튼 비활성화
        }
	}
}

