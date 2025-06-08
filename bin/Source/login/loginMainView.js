
loginMainView = class loginMainView extends AView
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
        theApp.qm.sendProcessByName('ac003', this.getContainerId(), null,
	
        //inblock function, 서버로 전송되기 바로 전에 호출되는 함수
        (queryData)=>
        {
            let blockData = queryData.getBlockData('InBlock1')
            blockData[0].input1 = 'hello'
            
            queryData.printQueryData()
        },
        
        //outblock function, 서버로부터 데이터를 수신한 후 바로 호출되는 함수
        (queryData)=>
        {

            queryData.printQueryData()
            
            //let blockData = queryData.getBlockData('OutBlock1')
            
            //this.outLbl.setText(blockData[0].output2)
            
        })
        // // 네비게이터 생성
        // let navi = new ANavigator('navigator');

        // // 페이지 등록
        // navi.registerPage('Source/MainView.lay', 'MainView');

        // // 페이지 전환
        // navi.goPage('MainView');
    }

}

