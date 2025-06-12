
KakaoTalkApp = class KakaoTalkApp extends AApplication
{
	constructor()
	{
		super()

        this.serverUrl = 'http://127.0.0.1:3000/users/';

        this.qm = null;
	}

	onReady()
	{
		super.onReady();

		// this.setMainContainer(new APage('main'))
		// this.mainContainer.open('Source/login/LoginMainView.lay')

        let navi = new ANavigator('navigator');
        navi.registerPage('Source/MainView.lay', 'MainView');
        navi.registerPage('Source/login/LoginMainView.lay', 'loginView');

        navi.goPage('loginView');


		//TODO:edit here
        this.connectServer()

	}

	unitTest(unitUrl)
	{
		//TODO:edit here

		this.onReady()

		super.unitTest(unitUrl)
	}

    connectServer() {
        this.qm = new WebQueryManager()
        
        let nio = new HttpIO(this.qm)
        this.qm.setNetworkIo(nio)
        
        this.qm.startManager(this.serverUrl)
    }

}

