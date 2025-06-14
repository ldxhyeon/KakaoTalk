
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


        // 아이디 입력창에 엔터 이벤트
        this.loginId.get$ele().on('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.onLoginBtnClick();
            }
        });

        // 비밀번호 입력창에 엔터 이벤트
        this.loginPw.get$ele().on('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.onLoginBtnClick();
            }
        });


        function normalFn() {
            return '즉시 반환';
        }

        async function asyncFn() {
            return '나중에 반환';
        }

        console.log(normalFn());  // '즉시 반환'
        console.log(asyncFn());   // Promise { '나중에 반환' }


        async function run() {
    const result = await asyncFn();
    console.log(result);  // '나중에 반환'
}
run();



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
              
                let navi = ANavigator.find("navigator");
                  
                // 페이지 전환
                navi.goPage('MainView');
            }
            else
            {
               AToast.show("아이디 또는 비밀번호가 일치하지 않습니다.");
            }
            
        })

       
    }

    // test

}

