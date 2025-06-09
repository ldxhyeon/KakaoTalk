
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

		// 리스트
        this.listData = [
            { img: 'https://randomuser.me/api/portraits/men/10.jpg', name: '이수현', state: '일하는 중입니다' },
            { img: 'https://randomuser.me/api/portraits/women/21.jpg', name: '김도현', state: '커피 한 잔의 여유 ☕' },
            { img: 'https://randomuser.me/api/portraits/men/32.jpg', name: '박지민', state: '연락은 문자로 주세요' },
            { img: 'https://randomuser.me/api/portraits/women/45.jpg', name: '최윤아', state: '오늘도 화이팅!' },
            { img: 'https://randomuser.me/api/portraits/men/54.jpg', name: '정해인', state: '회의 중입니다' },
            { img: 'https://randomuser.me/api/portraits/women/67.jpg', name: '한지우', state: '운동 가는 중💪' },
            { img: 'https://randomuser.me/api/portraits/men/78.jpg', name: '서지훈', state: '잘 지내시죠?' },
            { img: 'https://randomuser.me/api/portraits/women/80.jpg', name: '이하늘', state: '비 오는 날엔 라떼' },
            { img: 'https://randomuser.me/api/portraits/men/91.jpg', name: '강민호', state: '출장 중입니다' },
            { img: 'https://randomuser.me/api/portraits/women/12.jpg', name: '윤지호', state: '내일 봐요!' },
            { img: 'https://randomuser.me/api/portraits/women/67.jpg', name: '배수아', state: '조금 늦을 것 같아요' },
            { img: 'https://randomuser.me/api/portraits/men/78.jpg', name: '오세훈', state: '점심 추천 좀~' },
            { img: 'https://randomuser.me/api/portraits/women/21.jpg', name: '김하나', state: '드라이브 중 🚗' },
            { img: 'https://randomuser.me/api/portraits/men/10.jpg', name: '남준혁', state: '프로젝트 집중 모드' },
            { img: 'https://randomuser.me/api/portraits/women/12.jpg', name: '정유리', state: 'BGM은 역시 발라드 🎶' }
        ]


	}

	onInitDone()
	{
		super.onInitDone()

        // 리스트 추가
		this.friendListView.addItem('Source/friend/FriendListItem.lay', this.listData);

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

