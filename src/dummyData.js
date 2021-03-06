const dummyData = {
  funItem1: {
    page: 1,
    category: "mainnet",
    result: [
      {
        id: 1,
        name: "슈월드",
        img: "https://tp.rmoa.net/data/dapp/DJguqVH21XoyfcFoVRcBAi9VKuR5By.jpg",
        desc: "대한민국 토종 블록체인팀 슈콘(SUCON)이 독자적으로 개발한 슈월드 하이퍼체인(Hyperchain) 메인넷은 최대 30,000TPS에 달하는 초고속 거래처리속도, 뛰어난 보안성 및 확장성 등의 특징을 보유한 대중화를 위한 블록체인이며, 생태계내에서 수많은 구성원들 및 다양한 신분의 기여도를 측정하고 그에 대한 합리적 보상을 제공하는 멀티체인 시스템입니다.!",
        link: [],
      },
      {
        id: 2,
        name: "비트코인",
        img: "https://tp.rmoa.net/data/dapp/8cdv2FHe8s4Ct3Ig08kv6AGnZ75ct4.jpg",
        desc: "Bitcoin은 세계 최초의 성공적인 암호화폐입니다. Bitcoin은 익명성이 있어서, 사용자가 Bitcoin 계좌를 만들기 위해 주민등록번호나 여권번호와 같은 개인 식별 정보가 필요하지 않고 국가의 관리도 받지 않습니다. Bitcoin은 외부인에 의해 무작위로 쉽게 부풀려지거나, 조작되거나, 위조 및 동결 또는 파괴될 수도 없습니다.",
        link: [],
      },
      {
        id: 3,
        name: "이더리움",
        img: "https://tp.rmoa.net/data/dapp/XlMbRyLdqE9aJlU3RarT00jRWJtz2f.jpg",
        desc: "Ethereum은 블록체인 기술을 기반으로 스마트 계약 기능을 구현하기 위한 분산 컴퓨팅 플랫폼입니다. Ethereum은 Bitcoin과 비슷한 전자화폐의 기능과 더불어 솔리디티(Solidity) 등의 튜링완전성(Turing-Completeness)을 갖춘 확장용 언어를 이용해 스마트 계약을 작성함으로 여러 분야에 접목할 수 있습니다. 덕분에 블록체인 기술을 다양한 비즈니스 분야로 확장할 수 있게 되었습니다.",
        link: [],
      },
      {
        id: 4,
        name: "Cardano",
        img: "https://tp.rmoa.net/data/dapp/uvm2geAfBSEOD12bbIFjzK4v7Z31Zu.jpg",
        desc: "Cardano는 이더리움을 넘어선 차세대 블록체인 플랫폼을 위한 암호화폐입니다. 전 세계의 개인, 조직 및 정부에 의해 현재 매일 사용되는 금융 애플리케이션을 실행할 수 있는 기술 플랫폼으로, Cardano는 블록체인 플랫폼이고, ADA는 그 플랫폼 위에서 작동하는 암호화폐의 이름입니다. ",
        link: [],
      },
      {
        id: 5,
        name: "Ripple",
        img: "https://tp.rmoa.net/data/dapp/oOHv7yXiyd3YlFVEWmPb8PRh8eDgmx.jpg",
        desc: "금융기관들은 Ripple의 글로벌 네트워크에 참여함으로써 전 세계 어느 곳으로나 고객의 송금 요청을 안정적이고 효율적으로 즉시 처리할 수 있습니다. 또한 Ripple의 디지털 자산인 XRP를 사용하여 송금 비용을 절감하고, 새로운 시장으로 쉽게 진출할 수 있습니다.",
        link: [],
      },
      {
        id: 6,
        name: "Polkadot",
        img: "https://tp.rmoa.net/data/dapp/b3kUc0ErTKhhQozYfaVA9sZ7L8svb6.jpg",
        desc: "Polkadot은 서로 다른 블록체인을 연결하는 인터체인 프로젝트로, 체인 간 원활한 데이터 전송을 가능하게 합니다. Polkadot은 릴레이체인(relay chain), 파라체인(parachain)으로 구성되는데 이 중 릴레이체인은 거래 여부를 결정하는 중앙 관리자, 파라체인은 거래를 수집하고 처리하는 보조적 체인 역할을 합니다.",
        link: [],
      },
      {
        id: 7,
        name: "Binance Coin",
        img: "https://tp.rmoa.net/data/dapp/Uf1cjR228fYo92UwMSmy5zOtNY1pRE.jpg",
        desc: "바이낸스 체인은 11개의 노드를 가지고 운영되는 플랫폼으로 스마트 컨트랙트는 지원되지 않는 대신 거래 효율성이나 토큰 발행을 지원합니다. 토큰 발행을 BEP2라는 이름으로 명명되었고, 그 첫 코인이 BNB입니다. 바이낸스코인은 바이낸스 체인의 가스 요금 체계로 결정되었습니다.",
        link: [],
      },
      {
        id: 8,
        name: "Litecoin",
        img: "https://tp.rmoa.net/data/dapp/k8X0c5vSu0hJt5jflVfornMn7ldnzp.jpg",
        desc: "Litecoin은 비트코인을 기반으로 만들어진 작고 가벼운 암호화폐입니다. 개인간 피투피(P2P) 거래에 직접 주고받을 수 있는 암호화폐로서, 거의 제로에 가까운 비용으로 전 세계 사람들에게 즉각적으로 전송할 수 있습니다. 라이트코인은 비트코인의 하드포크로 파생돼 나온 최초의 암호화폐입니다다.",
        link: [],
      },
    ],
  },
  funItem2: {
    page: 1,
    category: "mining",
    result: [
      {
        id: 1,
        name: "마이닝풀허브",
        img: "https://tp.rmoa.net/data/dapp/FBLQLKndopWYg5NWU9hDmpH4W7yQEi.jpg",
        desc: "마이닝풀은 가정용 PC를 이용하여 채굴하는 방식이 큰 수익을 낼 수 없고 즉 가정용 전기와 가정용 PC의 한계를 극복한 새로운 플레이어 방식이기도 합니다. 개별적으로 채굴이 힘들어진 대신 각 PC를 네트워크상으로 병렬 연결해 함께 연산을 하는 공동작업을 하는 것이 ‘마이닝풀허브’입니다. ",
        link: [],
      },
      {
        id: 2,
        name: "팟마이닝",
        img: "https://tp.rmoa.net/data/dapp/xbUNDxwmdIVVZM3ob5oP44nUljlUq4.jpg",
        desc: "사용 전력 1MB당 2명의 전담 인력이 마이너를 12시간 모니터링 및 관리하며 마이닝 센터를 위한 국가와의 전력 이용 계약을 통해 안정적인 전력 공급 환경과 낮은 전기 요금으로 전 세계 최고의 안정을 갖춘 마이닝 센터를 운영하고 있으며, 전 세계 가장 저렴한 전기 요금을 바탕으로 소자본 투자자에게 즉시 비트코인을 마이닝할 수 있는 서비스를 제공하고 있습니다. ",
        link: [],
      },
      {
        id: 3,
        name: "해시쉐어",
        img: "https://tp.rmoa.net/data/dapp/J2kE6ccF9dOJdsphbWKKvvINTwKVm1.jpg",
        desc: "해시쉐어 프로젝트는 누구나 참여할 수 있는 효율적이고 안정적인 비트코인 채굴 시스템을 구축하면서 발전했습니다. 해시쉐어 네트어크 참여자들은 단순히 채굴사업에만 참여하여 보상을 받는 것이 아니고, 네트워크의 보안과 안정성을 유지하는 데 공헌한 정도에 따라 해시쉐어로 보상을 받을 수 있습니다. ",
        link: [],
      },
      {
        id: 4,
        name: "희망해시",
        img: "https://tp.rmoa.net/data/dapp/CUHCnbW9Tzlnk7nn6Q4WALFSr5fex1.jpg",
        desc: "희망해시는 마이닝 인프라 구축 기술과 전문 운영솔루션 및 클라우드 마이닝 서비스 개발 기술을 보유한 블록체인 전문기업으로 가장 저렴한 수수료 정책과 전문 운영 솔루션을 바탕으로 최고의 클라우드 마이닝 서비스를 고객에게 제공하기 위해 노력하고 있습니다. ",
        link: [],
      },
      {
        id: 5,
        name: "제네시스 마이닝",
        img: "https://tp.rmoa.net/data/dapp/jMUWGnxHfu4Taw645uX6vNMz01MYgL.jpg",
        desc: "비트코인은 미래의 화폐이며 제네시스 마이닝은 이 시장에서 가장 큰 클라우드 마이닝 회사입니다. 클라우드를 통해서 비트코인을 마이닝하고 지금 시작하세요!",
        link: [],
      },
      {
        id: 6,
        name: "OXBTC",
        img: "https://tp.rmoa.net/data/dapp/va7AKLQQGQsSU8mBBCuBkFZc2Dp31G.jpg",
        desc: "OXBTC는 성장하는 가상화폐 시장에서 이익을 얻을 수 있는 다양한 옵션을 제공하는 암호화폐 '투자 서비스 플랫폼'입니다. 서비스 목록에 Ether 클라우드 마이닝도 포함되어 있습니다.",
        link: [],
      },
      {
        id: 7,
        name: "ViaBTC",
        img: "https://tp.rmoa.net/data/dapp/zcBZr0TyQbPgD7eODWJAewS3AFVVrT.jpg",
        desc: "전 세계 최초로 비트코인 언리미티드(BTU•Bitcoin Unlimited)를 실행한 공개 마이닝풀이고 무료 거래 가속 서비스를 제공하고 있습니다. 비아비티씨는 강력한 기술력으로 블록체인 네트워크 운행 효율과 마이닝풀의 채굴 효율을 높여주고 있습니다.",
        link: [],
      },
      {
        id: 8,
        name: "Minergate",
        img: "https://tp.rmoa.net/data/dapp/JChB8ACvmijwJqwJElmLDcn8GOmXTL.jpg",
        desc: "Minergate지난 2014년 블록체인 마니아 그룹이 만든 다중 코인 마이닝 풀입니다. 가장 쉬운 마이닝 소프트웨어, 신뢰할 수 있는 연중무휴 24x7 지원 서비스 및 귀사에 도움이 되는 커뮤니티를 제공합니다.",
        link: [],
      },
    ],
  },
  funItem3: {
    page: 1,
    category: "exchange",
    result: [
      {
        id: 1,
        name: "Upbit",
        img: "https://tp.rmoa.net/data/dapp/FUezbcpybWjcdNT9mF36qAcXS9cjhE.jpg",
        desc: "Upbit는 두나무㈜가 운영하는 대한민국의 암호화폐 거래소이다. 국내 거래소 중 가장 많은 암호화폐를 상장한 거래소로 같편한 UI가 가장 큰 장점이다.",
        link: [],
      },
      {
        id: 2,
        name: "Gopax",
        img: "https://tp.rmoa.net/data/dapp/7km7VfE9q2Ctp7dWPYTpCugY9GBitg.jpg",
        desc: "세계가 인정한 한국 최고의 거래소! 안전하고 정직한 가상자산(암호화폐) 거래소 고팍스​• 세계 최초 국제 표준(ISO/IEC 27001), 국내 최초 보안인증(ISMS) 취득 거래소​",
        link: [],
      },
      {
        id: 3,
        name: "Bithumb",
        img: "https://tp.rmoa.net/data/dapp/p3q6Zxbt2ce0atCFEhPWo0HdIHtA3b.jpg",
        desc: "국내 최다 회원수, 최다 일 방문자수, 최다 실거래 회원수,국내 최대 체결량, 최대 거래금액,실시간 시세, 쉽고 안전한 거래",
        link: [],
      },
      {
        id: 4,
        name: "Binance",
        img: "https://tp.rmoa.net/data/dapp/ooeE8DDcz6PZvD6UlH7jqzmB7deTuE.jpg",
        desc: "세계 최고 수준의 보안으로 무장한 바이낸스(BINANCE)에서 가장 안전하게 가상자산을 거래해보세요! 거래의 안전을 위해 바이낸스(BINANCE)가 조성한 보험기금 SAFU는 사용자 여러분들께 거래의 신뢰와 안전을 보장합니다! 세계 최대 가상자산 거래소 바이낸스(BINANCE)의 풍부한 유동성을 경험해보세요! 사용자 여러분들께서는 언제 어디서나 원하는 가격으로 다양한 가상자산을 손쉽게 거래하실 수 있습니다!",
        link: [],
      },
      {
        id: 5,
        name: "Coinone",
        img: "https://tp.rmoa.net/data/dapp/7Ucm3g6YBesGTY6Tj7tKYg4IQbeK6r.jpg",
        desc: "2014년 출시 이래 보안사고 0건, 원칙을 지키는 가상자산 거래소 코인원 입니다. 안정적이고 간편한 모바일 거래 경험을 제공, 가상자산 시장의 흐름 ‘코인원 인포’에서 확인, ",
        link: [],
      },
      {
        id: 6,
        name: "Coinbase",
        img: "https://tp.rmoa.net/data/dapp/NJcvutUrl6s8MImwKi2nD5e8cwXiZ7.jpg",
        desc: "Coinbase는 비트코인, 이더리움 등 암호 화폐를 매수, 매도 및 저장하는 쉽고 신뢰성 있는 플랫폼입니다. Coinbase의 본사는 미국이며 30여 개국에서 이용할 수 있습니다.",
        link: [],
      },
      {
        id: 7,
        name: "Korbit",
        img: "https://tp.rmoa.net/data/dapp/DoqGq5jQ44VR6n0sseBxYjnUmrZj5Q.jpg",
        desc: "코빗(Korbit)은 한국 최초로 설립된 암호화폐 거래소이다. 코빗은 2013년 유영석과 김진화에 의해 한국비트코인거래소라는 이름으로 설립되었고 현재의 이름인 코빗으로 명칭을 변경하였다. 2013년 4월, 세계최초로 한화-비트코인 거래를 시작으로 2013년 7월 설립된 코빗은 2013년 말의 비트코인 점핑을 경험한 유일한 한국 거래소이다. ",
        link: [],
      },
      {
        id: 8,
        name: "Huobi Global",
        img: "https://tp.rmoa.net/data/dapp/pcG5Pc11op5JSD4Pg5v0fcdoIWGYR3.jpg",
        desc: "전 세계 전문가를 위한 혁신적인 디지털 자산 거래 플랫폼으로 다양한 디지털 자산에 대한 거래 및 투자 서비스를 제공합니다. Huobi는 중국, 홍콩, 한국, 일본, 싱가포르, 미국 등의 국가에서 독립 거래 및 운영 센터를 운영하는 세계 최고의 디지털 자산 거래 플랫폼입니다. ",
        link: [],
      },
    ],
  },
  funItem4: {
    page: 1,
    category: "wallet",
    result: [
      {
        id: 1,
        name: "SUWALLET",
        img: "https://tp.rmoa.net/data/dapp/NNaZq5c4nUZfKIlWO9ThItsas40y9w.jpg",
        desc: "SUWALLET은 슈월드 하이퍼체인 메인넷 기반의 P2P 지갑 서비스입니다. 최대 3만TPS의 거래처리 속도, 헬릭스 피라미드 특허 기술의 강력한 보안, 하이퍼토큰 관리, 합리적인 전송 수수료 등을 지원합니다.",
        link: [],
      },
      {
        id: 2,
        name: "Coinbase Wallet",
        img: "https://tp.rmoa.net/data/dapp/MBpKl6RLZoyommBlde3tsOZ0jO0TYC.jpg",
        desc: "코인베이스월렛(Coinbase Wallet)은 미국의 암호화폐 거래소인 코인베이스의 핫월렛 암호화폐 지갑이다. 원래의 오픈소스 디앱 브라우저 및 월렛인 토시(Toshi)를 코인베이스월렛이라고 이름을 바꾸면서 일련의 업데이트를 통해 기능과 서비스 영역을 확장했다. 코인베이스월렛은 사용자 제어 암호화폐 지갑이며 웹3(Web 3) 분산 응용 프로그램 또는 디앱(DApp)용 브라우저이다.",
        link: [],
      },
      {
        id: 3,
        name: "MyEtherWallet",
        img: "https://tp.rmoa.net/data/dapp/D6awNI7I4EEURq01sp7NBSMoxH06zq.jpg",
        desc: "마이이더월렛(MEW; MyEtherWallet)은 암호화폐인 이더리움을 보관하고 입출금할 수 있는 암호화폐 지갑이다.",
        link: [],
      },
      {
        id: 4,
        name: "Metamask",
        img: "https://tp.rmoa.net/data/dapp/z77zylEY7OlVW9QyTvD7qk1yVsci3G.jpg",
        desc: "Metamask는 이더리움을 보유하고 송금 및 관리할 수 있는 암호화폐 지갑입니다. 웹에서는 구글 크롬 웹브라우저에서 플러그인 방식으로 사용하는 크롬 확장 프로그램이며, 현재 앱으로도 사용이 가능합니다. ",
        link: [],
      },
      {
        id: 5,
        name: "NOVA wallet",
        img: "https://tp.rmoa.net/data/dapp/TZX1tUUSyCnLiUIZlh397X1ghFzana.jpg",
        desc: "NOVA wallet은 이오스 기반 모바일 지갑으로 이오스 생태계의 다양한 서비스를 제공하고 있습니다. 빠른 성장을 바탕으로 변화하는 이오스의 다양한 기능들을 노바월렛의 가장 큰 강점인 UI 및 UX를 통해 쉽고 간편한 사용이 가능하도록 서비스를 제공합니다.",
        link: [],
      },
      {
        id: 6,
        name: "Coinus",
        img: "https://tp.rmoa.net/data/dapp/JOJgGfEPQfeAZnEiYN7s5ZSiI0Dhm9.jpg",
        desc: "Coinus은 이더리움, 비트코인, 이오스와 그 토큰을 지원하는 암호화폐 지갑입니다. 단순 지갑뿐 아니라 콜드월렛을 제공하는 코인어스키퍼, 암호화폐 통합환경인 코인버스(CoinVerse)를 지원하며 자체 생태계 토큰인 코인어스(CNUS)를 가지고 있습니다. 코인버스는 코인어스가 구축하고자 하는 암호화폐 통합환경 서비스이며, 암호화폐를 이용하여 할 수 있는 모든 기능을 지원하는 플랫폼입니다.",
        link: [],
      },
      {
        id: 7,
        name: "imtoken",
        img: "https://tp.rmoa.net/data/dapp/uyPWvZ0wih39RLQEXStRAf7cRpntzt.jpg",
        desc: "imtoken은 중국 콘센랩스(ConsenLabs)가 만든 암호화폐 지갑입니다. 아임토큰(imToken)은 단순하고 안전하지만 강력한 기능을 제공하는 디지털 자산 관리 도구로서, 블록체인 기술과 일반 대중 간의 격차를 해소하기 위해 개발되었습니다. ",
        link: [],
      },
      {
        id: 8,
        name: "Token Pocket",
        img: "https://tp.rmoa.net/data/dapp/hp1b8lkefSXeCMxBRYvHpdcHohWfRv.jpg",
        desc: "Token Pocket은 멀티코인을 지원하는 신뢰받는 멀티체인 지갑입니다. 비트코인(BTC), 이더리움(ETH), 이오스(EOS), 트론(TRX), 아이오에스티(IOST), 코스모스(COSMOS), 바이낸스(BNB)를 쉽게 저장, 입출금할 수 있습니다.",
        link: [],
      },
    ],
  },
  funItem5: {
    page: 1,
    category: "game",
    result: [
      {
        id: 1,
        name: "upland",
        img: "https://tp.rmoa.net/data/dapp/9ifrdBlGmOHZL5b6wUenYxebZnQzIG.jpg",
        desc: "실제 주소에 연동되어 가상자산을 구입, 판매 및 거래할 수 있는 지구의 메타버스인 Upland에 연결되어 즐기고 적립하세요! 디지털 토지 소유자가 되어 부동산을 수익으로 전환하고 가상 비즈니스를 운영하여 UPX 코인을 획득하세요. 새로운 경제에서 얻은 수익을 USD로 환전하세요!",
        link: [],
      },
      {
        id: 2,
        name: "Alien Worlds",
        img: "https://tp.rmoa.net/data/dapp/kR1hSlDWkhGQeuEswKXmABrLz4Lp8w.jpg",
        desc: "Alien Worlds는 고유한 디지털 아이템을 수집하고 재생할 수 있는 NFT 메타버스입니다. 이 프로젝트는 ETH - WAX를 크로스하는 유일한 프로젝트이며, 탐험가들은 게임 플레이와 플래닛 DAOs 참여로 NFT와 팩을 얻거나 구입할 수 있습니다. Alien Worlds 디지털 자산은 모두 왁스 블록체인에 포함됩니다.",
        link: [],
      },
      {
        id: 3,
        name: "Splinterlands",
        img: "https://tp.rmoa.net/data/dapp/TosSeqGlrsUYbicX9b95BxVNvCPLVV.jpg",
        desc: "Splinterlands는 포켓몬 카드 게임과 WOW(월드 오브 워크래프트) 캐릭터의 공생관계를 떠올리게 할 디자인을 갖춘 수집 가능한 트레이딩 멀티플레이어 카드 게임입니다. 이 게임은 신비로운 세계를 바탕으로 한 스토리텔링이 발달되어 있습니다. 스팀 블록체인을 기반으로 구축되어 빠른 트랜잭션과 완벽한 투명성을 제공합니다.",
        link: [],
      },
      {
        id: 4,
        name: "Kolobok Adventures",
        img: "https://tp.rmoa.net/data/dapp/b74zb3paJb4NfGGE917KGaeUh9A0yB.jpg",
        desc: "Kolobok을 수집하고, 거래하고, 사육하세요! 그리고 모험을 떠나보내고 상품을 얻어가세요!",
        link: [],
      },
      {
        id: 5,
        name: "R-PLANET",
        img: "https://tp.rmoa.net/data/dapp/4x1mqqN9js840XllweleNAyQSTa8Hf.jpg",
        desc: "R-PLANET은 NFT를 사용하지 않고 혜택을 받으며, 즐거움이 가득한 혁신적인 NFT-staking 시스템입니다.",
        link: [],
      },
      {
        id: 6,
        name: "Prostectors",
        img: "https://tp.rmoa.net/data/dapp/3J5jRu2OqhXcMT6n8gCGcJhuS8eCvc.jpg",
        desc: "EOS의 첫 MMO 게임! 완전한 사용자 생성 경제를 갖춘 실시간 경제 전략. 게임 내 상품과 서비스의 가격은 공급과 수요에 따라 결정됩니다.",
        link: [],
      },
      {
        id: 7,
        name: "Crypto Dynasty",
        img: "https://tp.rmoa.net/data/dapp/hYtXIqFimlrGn46lkzYxXpSTK2eVNo.jpg",
        desc: "Crypto Dynasty는 플레이어가 자유롭게 플레이어를 키우고 거래를 통해 수익을 올리는 캐릭터 육성 거래 게임입니다.",
        link: [],
      },
      {
        id: 8,
        name: "Axie Infinity",
        img: "https://tp.rmoa.net/data/dapp/Z1c1FcKnaqKVyxTU1Yvvb49KCRreFs.jpg",
        desc: "Axie Infinity는 포켓몬에서 영감을 받은 디지털 펫 세상으로, 플레이어들은 Axie라고 불리는 귀여운 캐릭터를 다양한 게임에 사용합니다. Axie Infinity 유니버스는 'Free to Play to Earn' 게임플레이와 플레이어 소유 경제를 통해 블록체인 기술의 이점을 부각시킵니다.",
        link: [],
      },
    ],
  },
  funItem6: {
    page: 1,
    category: "defi",
    result: [
      {
        id: 1,
        name: "Chainlink",
        img: "https://tp.rmoa.net/data/dapp/YM7LTHqbBzcp6n4wL0Le1oBdBDpDD1.jpg",
        desc: "체인링크(Chainlink)는 블록체인의 스마트 계약을 블록체인 외부의 데이터, 결제, API 등에 연결하기 위해 사용하는 블록체인 미들웨어 플랫폼이자 암호화폐입니다. 체인링크는 이더리움 기반으로 작동하는 각종 스마트 계약이 현실 세계의 데이터와 쉽게 연결되도록 돕는 역할을 합니다.",
        link: [],
      },
      {
        id: 2,
        name: "Wrapped Bitcoin",
        img: "https://tp.rmoa.net/data/dapp/WN1Z1xaLddwxHXTenYLXObjlu29z4J.jpg",
        desc: "Wrapped Bitcoin는 비트코인을 이더리움 환경에서 쓸 수 있도록 지원하는 중간 연결고리 성격의 암호화폐입니다. 발행되는 WBTC와 담보로 잡힌 비트코인 수량은 블록체인 상에서 투명하게 공개될 예정입니다. ",
        link: [],
      },
      {
        id: 3,
        name: "Uniswap",
        img: "https://tp.rmoa.net/data/dapp/f0mUtyYmWZsgaVZbRsGBlWmpMTuRV3.jpg",
        desc: "Uniswap은 ETH와 ERC-20 토큰 간의 자동 교환 거래를 용이하게 하도록 설계된 이더리움 기반인 프로토콜입니다. Uniswap은 온체인(on-chain)에서 설치되어 탈중심화 지갑만 설치하면 누구도 이 프로토콜을 사용할 수 있습니다.",
        link: [],
      },
      {
        id: 4,
        name: "Aave",
        img: "https://tp.rmoa.net/data/dapp/YveJlQcM8ThxdCyv4HcdyMFvIINNJy.jpg",
        desc: "Aave는 2017년에 설립된, 예금과 차입 자산에 대한 이자를 얻기 위한 오픈소스 및 비 세관 프로토콜이자 코인대출 플랫폼입니다. Aave의 프로토콜은 cDAI 및 차이(Chai)와 같이 시중에서 구할 수 있는 베어링 토큰과 비교하여 혁신적인 토큰화 모델을 도입합니다. ",
        link: [],
      },
      {
        id: 5,
        name: "Avalanche",
        img: "https://tp.rmoa.net/data/dapp/gy3FA4kLbBfFKRO32oUQQBLAygd7La.jpg",
        desc: "Avalanche 블록체인은 비트코인, 이더리움 등 기존의 작업증명(PoW) 알고리즘이 아닌 비잔틴 장애 허용(BFT) 알고리즘에 토대를 두고 있습니다. Avalanche 블록체인은 초당 6,000 TPS의 속도로 처리할 수 있습니다. ",
        link: [],
      },
      {
        id: 6,
        name: "Terra",
        img: "https://tp.rmoa.net/data/dapp/otOdQNXtqhPiCf2DS85vjB5i8vETCz.jpg",
        desc: "Terra는 블록체인을 활용한 결제 시스템을 다양한 이커머스(전자상거래) 플랫폼에 제공하는 글로벌 블록체인 핀테크 기업입니다. 테라 프로토콜에는 다른 암호화폐들과 달리 가격 변동이 없는 스테이블코인(stablecoin) '테라'와 가격 안정화를 위한 마이닝 토큰 '루나'가 있습니다.",
        link: [],
      },
      {
        id: 7,
        name: "Synthetix",
        img: "https://tp.rmoa.net/data/dapp/66adr0NpNB2yhqB3sT6D1eSmkjKV1W.jpg",
        desc: "Synthetix는 이더리움 기반의 합성자산을 거래하고 발행하는 플랫폼이다. 누구나 탈중앙화된 신세틱스 플랫폼으로 상대방 없이 암호화된 합성자산에 접근할 수 있다. 이러한 신세틱 자산(Synth)은 신세틱스네트워크토큰(Synthetix Network Token, SNX)에 의해 담보로 스마트 계약에 고정된다.",
        link: [],
      },
      {
        id: 8,
        name: "Maker",
        img: "https://tp.rmoa.net/data/dapp/HY2cZ4hxRKmS9HgR8gLbDVO4odFJG4.jpg",
        desc: "Maker Token은 암호화폐 담보 대출 방식의 스테이블코인인 다이(DAI)에서 대출 수수료를 지불하기 위해 사용하는 암호화폐입니다. 메이커토큰은 시스템의 중요한 변화에 대한 결정을 내릴 때, 투표권을 행사하기 위해 사용할 수도 있습니다.",
        link: [],
      },
    ],
  },
  funItem7: {
    page: 1,
    category: "shop",
    result: [
      {
        id: 1,
        name: "베리스토어",
        img: "https://tp.rmoa.net/data/dapp/EiuhJiQuWcgOWyxScCzo9bYzOZkXkC.jpg",
        desc: "연예인, 유튜버 등 셀럽의 애장품과 재능(사용권)을 구매할 수 있습니다. 원하는 날, 원하는 곳으로 부를 수 있는 셀럽의 시간과 재능을 산다!",
        link: [],
      },
      {
        id: 2,
        name: "FNB몰",
        img: "https://tp.rmoa.net/data/dapp/gorpffKmH7OOzbbcpmZ9KMg508wlax.jpg",
        desc: "FNB캐시리플렛 회원분들을 위한 쇼핑몰 FNBmall. FNB캐시리플렛 계정으로 이용가능하시며, 보유하신 FP로 모든 상품을 구매하실 수 있습니다. FNB 보유 수량에 따라(FNB캐시리플렛 지갑기준) 다양한 혜택이 제공될 예정 입니다.",
        link: [],
      },
      {
        id: 3,
        name: "Quube",
        img: "https://tp.rmoa.net/data/dapp/jhYgNhNKxaEHK7kBsG0pjVnUPR0gWa.jpg",
        desc: "QuuBe는 Qoo10의 온라인 B2B & 도매 마켓입니다. 지금 QuuBe 앱을 다운로드하고 차별화된 온라인 B2B & 도매 마켓에 참여하세요! Qoo10의 가상화폐 Qcoin으로 결제도 가능합니다.",
        link: [],
      },
      {
        id: 4,
        name: "Qoo10",
        img: "https://tp.rmoa.net/data/dapp/6EIuySRtdCbATBR58Whuvi8T8Cj6PH.jpg",
        desc: "세상에서 가장 쉬운 직구, 앱쿠폰 최대 $20 추가할인! 빗썸 거래소와 연동되어 밋썸캐시로 구매 가능!",
        link: [],
      },
      {
        id: 5,
        name: "이빛몰",
        img: "https://tp.rmoa.net/data/dapp/Wc1ze2g0OgSYAqSC086TaVUqqzu0r2.jpg",
        desc: "안전하고 빠른 암호화폐쇼핑몰,암호화폐 유저들에게 최고의 혜택을 제공하는 이빛몰",
        link: [],
      },
      {
        id: 6,
        name: "마켓블리",
        img: "https://tp.rmoa.net/data/dapp/5HwBiUGpCuomNbQHfFxTfGm1Zk5LJT.jpg",
        desc: "블록체인 기반 프리미엄 농산물 예약구매 서비스 입니다. 소비자는 신선하고 안전한 신선식품을 합리적인 가격에 제공 받고, 생산자는 제값을 받는 상생의 생태계를 만듭니다.",
        link: [],
      },
      {
        id: 7,
        name: "엔터플러스",
        img: "https://tp.rmoa.net/data/dapp/jFWGH4iolNpIhENLfuWMfx4NbsrQQd.jpg",
        desc: "엔터플러스(EnterPLUS)에는 팬들을 위한 앨범, 콘서트 티켓, 굿즈, 크라우드 펀딩까지 진행되는 엔터테인먼트 쇼핑몰이다. 일반 결제외에도 미라클 토큰으로 결제가 가능하며, 사용자의 미라클토큰 보유량과 예치 기간에 따라 해당 콘서트의 VIP석과 알파 좌석을 예매할 수 있는 확률이 높아진다. ",
        link: [],
      },
      {
        id: 8,
        name: "코인엑스클럽",
        img: "https://tp.rmoa.net/data/dapp/PJ9jxNXcExJuh20GUCSHRDcsfVNUZJ.jpg",
        desc: "코인엑스클럽은 정보공유 및 Community 활동을 통해 획득한 Point(CP)를 Token(CPX)으로 교환하거나, 쇼핑몰에서 상품을 구입할 수 있으며 코인엑스클럽에서 제공하는 다양한 Contents에 참여함으로써 이용자들의 자유로운 활동을 보장합니다. 코인엑스클럽은 Community를 Blockchain과 접목시킨 보상시스템을 구축하여 실생활에 접목시킨 시스템으로 기존과는 다른 새로운 Community와 진정한 암호화폐 생태계로서의 기능을 수행할 수 있습니다.",
        link: [],
      },
    ],
  },
  funItem8: {
    page: 1,
    category: "community",
    result: [
      {
        id: 1,
        name: "코박",
        img: "https://tp.rmoa.net/data/dapp/T9Oa0cxN6XNaVRAXDuj6CF0VdpaTyi.jpg",
        desc: "코박은 암호화폐 커뮤니티로, 코인 투자정보와 시세조회가 가능한 커뮤니티 플랫폼입니다. 코박은 코박 라이브를 통해 이용자들에게 다양한 코인 바운티 기회를 제공하는데, 코박 어플로 코박 라이브에 참여해 코인을 받을 수도 있습니다. 코박 라이브 외에도 각종 코인뉴스를 볼 수도 있고 프리세일 및 각종 이벤트에 참여해 코인 에어드랍을 받을 수도 있습니다.",
        link: [],
      },
      {
        id: 2,
        name: "해시넷",
        img: "https://tp.rmoa.net/data/dapp/OSt8akw2P4niyjKnlabdQBiPWwBcul.jpg",
        desc: "해시넷(Hashnet)은 블록체인 및 암호화폐 정보 포털 사이트를 운영하고, 오프라인 블록체인 콘퍼런스 및 및업 행사를 주관하며, 상호인증 블록체인 기반의 기업정보 공유 시스템을 개발하고 있다. ",
        link: [],
      },
      {
        id: 3,
        name: "디시인사이드 비트코인갤러리",
        img: "https://tp.rmoa.net/data/dapp/HkhK0aUAdKv5ksJYn6eTrWgVIBw9NH.jpg",
        desc: "디시인사이드에 개설된 비트코인 및 암호화폐 전반을 다루는 갤러리.",
        link: [],
      },
      {
        id: 4,
        name: "땡글",
        img: "https://tp.rmoa.net/data/dapp/ZP1f5ocjnQdioWtn9vIN8Ay2L3m4uy.jpg",
        desc: "땡글은 국내 블록체인 역사와 함께 하고 있는 커뮤니티로서, 채굴, 트레이딩 및 개발 등 블록체인 산업의 전반 정보가 활발히 공유되고 있는 암호화폐 커뮤니티입니다.",
        link: [],
      },
      {
        id: 5,
        name: "코인엑스클럽",
        img: "https://tp.rmoa.net/data/dapp/PJ9jxNXcExJuh20GUCSHRDcsfVNUZJ.jpg",
        desc: "코인엑스클럽은 정보공유 및 Community 활동을 통해 획득한 Point(CP)를 Token(CPX)으로 교환하거나, 쇼핑몰에서 상품을 구입할 수 있으며 코인엑스클럽에서 제공하는 다양한 Contents에 참여함으로써 이용자들의 자유로운 활동을 보장합니다. 코인엑스클럽은 Community를 Blockchain과 접목시킨 보상시스템을 구축하여 실생활에 접목시킨 시스템으로 기존과는 다른 새로운 Community와 진정한 암호화폐 생태계로서의 기능을 수행할 수 있습니다.",
        link: [],
      },
      {
        id: 6,
        name: "뽐뿌",
        img: "https://tp.rmoa.net/data/dapp/9iwycJz8UVCLgR3F7wEOaIjw4CYsJd.jpg",
        desc: "쇼핑몰 정보 공유 사이트로 시작하여, 스마트폰 대중화 이후부터 이동통신기기 거래 관련 최대의 커뮤니티로 쇼핑 정보 및 각종 재테크 관련 글이 올라오고 있습니다.",
        link: [],
      },
      {
        id: 7,
        name: "코인판",
        img: "https://tp.rmoa.net/data/dapp/mzzllrcHM7XR5xBkeWbJLxyvnWk45O.jpg",
        desc: "빗썸, 업비트, 코인원, 코인빗, 코빗, 바이낸스 등의 시세를 한번에 확인할 수 있고, 비트코인, 이더리움, 트론, 리플 등 100개 이상의 시세를 제공하고 있습니다. 암호화폐와 거래소에 대한 게시판(최근 주식 게시판 신설)도 활성화되어 있어 현재 상황에 대한 유저간 정보를 주고 받을 수 있습니다.",
        link: [],
      },
      {
        id: 8,
        name: "클리앙",
        img: "https://tp.rmoa.net/data/dapp/BKQOXHRtT0cEjemAwMxIxVnQ44fyvM.jpg",
        desc: "클리앙(CLIEN)은 대한민국의 인터넷 포럼이다. 2001년 6월 6일 소모임에서 시작하여 싸이월드 클럽을 거쳐 2001년 12월 31일 독립, 현재의 클리앙 사이트로 성장하였다. 본래 PDA를 사용하거나 관심 있는 사용자들을 위한 커뮤니티였으나 현재는 일반적인 정보와 IT관련 정보를 중심으로 한 커뮤니티 사이트로 발전되어 유지되고 있다. 2017년 하반기, 서버와 UI, UX 개선을 대대적으로 진행하였다.",
        link: [],
      },
    ],
  },
  funItem9: {
    page: 1,
    category: "entertainment",
    result: [
      {
        id: 1,
        name: "Somesing",
        img: "https://tp.rmoa.net/data/dapp/qnp7frt4mL0ce00VuSL3CCpC6GYgJN.jpg",
        desc: "썸씽(SOMESING)은 블록체인 기술을 접목한 모바일 기반 소셜 노래방앱 서비스로, 크리에이터(싱어)들은 좋아하는 노래를 즐기면서, 콘텐츠 창작활동을 할 수가 있으며 블록체인의 스마트 컨트렉트를 통해 창작된 콘텐츠에 대한 공정하고 투명한 보상을 받을 수 있습니다. ",
        link: [],
      },
      {
        id: 2,
        name: "Bora",
        img: "https://tp.rmoa.net/data/dapp/JAy7q726mktBdB6X6BjxInmgDnsLns.jpg",
        desc: "보라토큰은 생태계 내 콘텐츠 비즈니스 유통과 사용자 활성화 목적으로 활용한다. 게임, 소설, 커뮤니티, 엔터테이먼트 등 다양한 형태의 콘텐츠 서비스 제공자들은 BORA 플랫폼을 통해 쉽고 빠르게 자신의 서비스를 제공할 수 있습니다. ",
        link: [],
      },
      {
        id: 3,
        name: "MovieBloc",
        img: "https://tp.rmoa.net/data/dapp/TFiuUpBvv2o51xSHN1cZbYTzl0xuKX.jpg",
        desc: "무비블록은 블록체인 기반의 참여자 중심 영화 배급 플랫폼이다. 제작, 배급, 상영으로 이루어지는 거대 자본에 의한 영화 생산과 유통을 탈중앙화하고 참여자들에게 역할과 기여에 따라 투명한 보상을 통해 생태계를 발전시키고자 한다. 참여자는 창작자, 큐레이터, 번역가, 리뷰어, 관객 등의 역할을 수행하면서 탈중앙화된 영화의 유통을 경험하게 됩니다. ",
        link: [],
      },
      {
        id: 4,
        name: "Muzika",
        img: "https://tp.rmoa.net/data/dapp/9CtCQpVi7J3cMjxGv6kvyciqc4jiGB.jpg",
        desc: "뮤지카는 음악산업에서 아티스트을 포함한 그들의 팬에게도 적절한 대우와 보상이 돌아갈 수 있는 코인이다. 음악 산업 시장의 제도적인 개혁을 통해 음원이 지니는 진정한 가치를 보다 더 균형있고 올바른 경제적 보상을 이끌어내 건전한 음악 산업의 틀을 만들어 내는 것을 목표로 하고 있습니다.",
        link: [],
      },
      {
        id: 5,
        name: "Miraqle",
        img: "https://tp.rmoa.net/data/dapp/Uxcjv4CJh5LT62yRfPJAlbpv1x5Fbr.jpg",
        desc: "미라클토큰을 개발한 뮤직큐플러스(MusicQ Plus)는 뮤직큐 플랫폼에 블록체인 기술을 접목시켜토큰 생태계를 구축하는 회사입니다. 뮤직큐 애플리케이션에서도 팬과 아티스트가 함께 음악을 듣고 플레이리스트를 공유하여 채팅과 소통을 할 수 있습니다. ",
        link: [],
      },
      {
        id: 6,
        name: "Brother Music Platform",
        img: "https://tp.rmoa.net/data/dapp/zGnLMhcN0ueUuxibKykGTFoefMwAyp.jpg",
        desc: "Brother Music Platform은 기존 음악플랫폼과 차별화 전략을 두고있다. 타사이트의 음악듣기감상은 물론이고 인터넷쇼핑과 음악 오디션란이 동시에 이뤄지는 멀티 음악 플랫폼이다.",
        link: [],
      },
      {
        id: 7,
        name: "ACE",
        img: "https://tp.rmoa.net/data/dapp/AQX69nNdhu6Q2MKrF1N3F1CKRiB7Hk.jpg",
        desc: "ACE 는 ACE Entertainment 가 진행하는 엔터테인먼트 산업 생태계의 중심이 되는 유틸리티 토큰으로서 해당 사업에 직접 사용되거나 플랫폼 운영에 대한 의사결정에 참여하며 생태계 성장에 따른 이익을 공유 받기 위한 목적으로 발행되었습니다.",
        link: [],
      },
      {
        id: 8,
        name: "Dtube",
        img: "https://tp.rmoa.net/data/dapp/34sHc84koX2vA5Dgm2Nb1NWNB2mTnt.jpg",
        desc: "디튜브는 사용자가 콘텐츠의 인기, 절제, 수익 분배를 결정할 수 있도록 직접적이고 편견이 없으며 투명한 투표 메커니즘을 제공하는 소셜 비디오 공유 플랫폼입니다. 이 플랫폼은 3가지의 특징을 가지고 있다. 첫 번째는 투명성과 신뢰성을 한층 높이기 위한 신기술을 도입하였습니다. ",
        link: [],
      },
    ],
  },
};

export default dummyData;
