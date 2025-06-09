
LoginMainView = class LoginMainView extends AView
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
        super.onInitDone();

        // 로그인 버튼 비활성화
        this.loginBtn.enable(false);

        // 아이디 비밀번호 값 있으면 활성화
        this.onLoginIdChange();


    }


	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}


    onLoginIdChange() {
        
        let loginId = this.loginId.getText();
        let loginPw = this.loginPw.getText();


        // 둘 다 비어있지 않으면 버튼 활성화, 아니면 비활성화
        if (loginId !== '' && loginPw !== '') {
            this.loginBtn.enable(true);  // 버튼 활성화
        } else {
            this.loginBtn.enable(false); // 버튼 비활성화
        }
    }
    

    onLoginPwChange(comp, info, e)
	{
        this.onLoginIdChange();
	}


    onLoginBtnClick(comp, info, e)
    {

        // 테스트중
        theApp.qm.sendProcessByName('ac001', this.getContainerId(), null,
	
        //inblock function, 서버로 전송되기 바로 전에 호출되는 함수
        (queryData)=>
        {
            let blockData = queryData.getBlockData('InBlock1')
            blockData[0].login_id = this.loginId.getText(); // 아이디
		    blockData[0].login_pw = this.loginPw.getText(); // 비밀번호
            
            queryData.printQueryData()
        },
        
        //outblock function, 서버로부터 데이터를 수신한 후 바로 호출되는 함수
        (queryData)=>
        {

            // 수신받는 데이터 확인
            queryData.printQueryData()

            let blockData = queryData.getBlockData('OutBlock1');
        
            // 서버 아이디 비밀번호 일치하면 페이지 전환
            if (blockData[0].id === this.loginId.getText() && blockData[0].pw === this.loginPw.getText())
            {
              
                let navi = new ANavigator('navigator');

                // 페이지 등록
                navi.registerPage('Source/MainView.lay', 'MainView');

                // 페이지 전환
                navi.goPage('MainView');
            }
            else
            {
               AToast.show("아이디 또는 비밀번호가 일치하지 않습니다.");
            }
            
        })

        // // 네비게이터 생성
        // let navi = new ANavigator('navigator');

        // // 페이지 등록
        // navi.registerPage('Source/MainView.lay', 'MainView');

        // // 페이지 전환
        // navi.goPage('MainView');
    }

    // test

}

