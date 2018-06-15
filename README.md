
$미들웨어, 라우터 참고(https://www.zerocho.com/category/NodeJS/post/578b5a36d8316615006bee0f)

# 정적 파일(html, css, js, font etc)을 제공하기 위해 미들웨어 추가
app.use(express.static(path.join(__dirname, 'html')));
  app.use : 미들웨어
  express.static : 정적파일들 위치

# Node.js환경에서 디렉토리 주소
: path모듈을 사용(항상) => 주소 구분자가 / 또는 \이든 상관없이 환경에 맞게 설정해줌

  $디렉토리 참고 : 아래와 같을 경우 상위 폴더로 한단계 올라감
  const path = require('path');
  path.join('example', 'children','file.js'); // example/children/file.js
  path.join('example', 'children','..','file.js'); // example/file.js
  path.join('example', 'children','grandson','..','..','file.js'); // example/file.js

# 미들웨어(middleware) : 응답과정에서 중간에 껴서 역할을 하는 프로그램
  - express 장점은 미들웨어를 사용. express.static이 미들웨어의 한 종류로, 정적파일 기본경로를 정해주는 역할.
  - middleware 종류 : morgan, compression, session, body-parser, cookie-parser, method-override, cors, multer 등(npm에서 install 가능)

  ** express.static 제외하고는 모든 미들웨어가 이제 포함안되므로, npm install 하고 app.use(middleware)를 입력해야함 **
  필요시, npm 검색 !!

  - 미들웨어 사용
  : const app = express(); 한후에 app.use로 순차적으로 미들웨어 시작
  : 미들웨어에 req, res를 매개변수로 받아 조작가능, next()를 하면 다음 미들웨어로 넘어감.
  next() 없을 때엔 진행이 안되므로, 반드시 포함

# 라우팅(Routing)
  -app.get('/', callback) : app[REST메소드]('주소', callback함수) 형식
                          : / 주소로 GET요청이 올때 콜백 응답
  app.get, app.post, app.put, app.delete 메소드를 사용가능(put, delete 사용시, method-override 패키지 설치)
  - 주소 : 정규표현식, 와일드카드(:을 이용) 사용가능
  ex) app.get('/', callback), app.get('/post/:id', callback)
      - 와일드카드 예제
      : /post/a 요청시 순서에 따라 /post/:id 가 먼저 라우팅됨. 따라서, 와일드카드는 다른 라우터보다 뒤에 적어주어야 함
      app.get('/post/:id', ()=>{});
      app.get('/post/a', ()=>{});
      * 와일드카드는 반복되는 부분이 많아, 주로 모듈로 분리하여 사용.
       => route.js 파일과 server.js 파일로 분리후, server.js 에서 const route = require('./route.js'); 모듈파일을 연결

       => 모듈별 라우팅 장점 : 기능별 그룹화

       ex)
       1. app.use('/category', route1); 일 때, route1에 있는 라우터들은 모두 카테고리 주소 아래에 그룹화 됨.

       2. route1 파일에 router.get('/javascript', callback)코드 있을 경우, 자동으로 /category/javascript 주소로 연결된다
