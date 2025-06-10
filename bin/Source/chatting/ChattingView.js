
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

		this.listData = [
            {
                img: 'https://randomuser.me/api/portraits/men/10.jpg',
                name: '이수현',
                content: '회의 자료 정리해뒀어요.',
                date: '오전 9:15',
                count: 0
            },
            {
                img: 'https://randomuser.me/api/portraits/women/21.jpg',
                name: '김도현',
                content: '오늘 저녁에 시간 돼요?',
                date: '오전 8:47',
                count: 4
            },
            {
                img: 'https://randomuser.me/api/portraits/women/45.jpg',
                name: '최윤아',
                content: '내일 일정 다시 한번 확인해줘~',
                date: '오후 9:00',
                count: 0
            },
            {
                img: 'https://randomuser.me/api/portraits/men/54.jpg',
                name: '정해인',
                content: '지금 통화 가능해?',
                date: '오후 7:12',
                count: 4
            },
            {
                img: 'https://randomuser.me/api/portraits/women/67.jpg',
                name: '한지우',
                content: '운동 끝났어! 뭐해?',
                date: '오후 6:30',
                count: 2
            },
            {
                img: 'https://randomuser.me/api/portraits/men/78.jpg',
                name: '서지훈',
                content: '오늘 날씨 진짜 좋더라~',
                date: '오후 5:55',
                count: 3
            },
        ];



	}

	onInitDone()
	{
		super.onInitDone()

		 // 리스트 추가
		this.chattingListView.addItem('Source/chatting/ChattingListItem.lay', this.listData);

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here
	}


}

