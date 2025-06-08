
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

}

