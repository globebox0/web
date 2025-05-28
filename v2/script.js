'use strict';

const modalData = {
    intro: {
        title: "<i class='fas fa-book-open card-icon'></i> 노동조합, 규칙 만드는 곳?",
        content: `
            <p>안녕하세요, 조합원 동지 여러분! 우리가 매일 일하는 직장, 이곳에도 규칙이 필요하겠죠? 노동조합은 단순히 우리 권익만 챙기는 곳이 아니에요. 마치 작은 국회처럼, 우리 직장 안에서 지켜야 할 중요한 규칙들을 만드는 '입법기관' 역할을 한답니다.</p>
            <h4>왜 '입법기관'이라고 할까요?</h4>
            <ul>
                <li><strong>규칙 만들기:</strong> 노동조합은 회사와 함께 '단체협약'이라는 것을 만들어요. 이건 우리 월급, 근무시간, 휴가, 안전 문제 등 직장 생활의 모든 것을 정하는 중요한 약속이자 규칙이에요.</li>
                <li><strong>힘의 균형:</strong> 혼자서는 회사에 목소리 내기 어렵지만, 노동조합으로 뭉치면 회사와 동등한 위치에서 이야기할 수 있어요.</li>
                <li><strong>민주적인 절차:</strong> 단체협약을 만들 때 조합원들의 의견을 듣고, 투표도 하죠. 마치 국회의원들이 국민 의견을 듣고 법을 만드는 것처럼요!</li>
            </ul>
            <p>이 페이지를 통해 노동조합이 어떻게 우리 직장의 '법'을 만들고, 그 힘이 어디서 나오는지 쉽고 재미있게 알아봐요!</p>
        `
    },
    constitutionalBasis: {
        title: "<i class='fas fa-gavel card-icon'></i> 우리의 힘! 헌법이 보장하는 권리",
        content: `
            <p>우리나라 최고의 법, 바로 '헌법'이죠? 이 헌법 제33조에 우리 노동자들의 아주 중요한 권리가 딱! 적혀 있어요. 이걸 '노동3권'이라고 부르는데, 이게 바로 노동조합이 직장 규칙을 만들 수 있는 든든한 배경이 된답니다.</p>
            <h4>헌법 제33조가 보장하는 노동3권:</h4>
            <ul>
                <li><strong>단결권:</strong> '우리끼리 뭉치자!' 노동조합을 만들 수 있는 권리예요. 혼자서는 힘들지만, 뭉치면 큰 힘이 되죠. 이게 바로 직장 내에서 우리가 의견을 모으는 대표팀(노동조합)을 만드는 기초예요.</li>
                <li><strong>단체교섭권:</strong> '사장님과 동등하게 대화하자!' 회사랑 근로조건(월급, 근무시간 등)에 대해 직접 이야기하고 결정할 수 있는 권리예요. 이 대화 끝에 만들어지는 게 바로 '단체협약'이라는 우리 직장 법이랍니다.</li>
                <li><strong>단체행동권:</strong> '필요하면 행동하자!' 파업처럼 우리의 요구를 알리고, 관철하기 위해 행동할 수 있는 권리예요. 이게 있어야 우리가 만든 규칙이 진짜 힘을 가질 수 있어요. (물론 합법적인 범위 내에서요!)</li>
            </ul>
            <p>이 권리들은 그냥 우리 이익만 챙기라는 게 아니에요. 헌법 제31조에 나오는 '일할 권리'를 제대로 지키기 위한 장치이기도 해요. 그래서 노동조합은 단순한 모임이 아니라, 우리 권리를 지키고 직장 규칙을 만드는 '작은 국회' 같은 역할을 하는 거랍니다!</p>
        `
    },
    collectiveAgreement: {
        title: "<i class='fas fa-file-signature card-icon'></i> 단체협약: 우리 직장의 '법'",
        content: `
            <p>노동조합과 회사가 머리를 맞대고 만든 약속, '단체협약'! 이게 왜 그렇게 중요할까요? 바로 우리 직장 안에서는 가장 힘센 규칙이기 때문이에요.</p>
            <h4>단체협약, 뭐가 그렇게 특별할까요?</h4>
            <ul>
                <li><strong>최고의 규칙:</strong> 노동조합법 제33조에 따르면, 단체협약은 회사가 만든 규칙(취업규칙)이나 우리가 회사랑 따로 맺은 근로계약보다 우선 적용돼요. 즉, 단체협약 내용이 더 유리하면 그걸 따라야 하는 거죠. 직장 내 '헌법' 같은 존재랄까요?</li>
                <li><strong>어기면 처벌?:</strong> 네, 맞아요! 노동조합법 제92조는 단체협약을 어기면 최대 1천만 원 벌금을 물 수 있다고 정해놨어요. 그냥 개인 간의 약속이 아니라, 법적인 구속력이 있는 공적인 약속이라는 뜻이죠.</li>
                <li><strong>우리 생활과 직결:</strong> 단체협약에는 월급, 일하는 시간, 휴가뿐 아니라 징계 절차, 어려운 일 처리 방법, 복지 혜택까지 우리 직장생활의 거의 모든 것이 담겨 있어요. 그야말로 우리 직장의 '생활 법전'인 셈이죠!</li>
                <li><strong>파업으로 만든 규칙:</strong> 때로는 우리의 요구를 관철하기 위해 파업 같은 단체행동을 하기도 해요. 이런 과정을 통해 만들어진 단체협약은 더욱 소중하고 강력한 힘을 갖게 되죠. 1987년 노동자 대투쟁 때 많은 중요한 권리들이 단체협약으로 만들어졌어요.</li>
            </ul>
            <p>그러니 단체협약 내용을 잘 알고, 잘 지켜지는지 감시하는 건 우리 모두의 역할이랍니다!</p>
        `
    },
    representativeUnion: {
        title: "<i class='fas fa-bullhorn card-icon'></i> 대표선수 노조의 역할",
        content: `
            <p>한 회사에 여러 노동조합이 있을 수 있어요. 마치 국회에 여러 정당이 있는 것처럼요! 이 경우, 회사는 원칙적으로 단 하나의 <strong>교섭대표노동조합</strong>과 교섭을 진행하게 됩니다. 이게 바로 <strong>교섭창구 단일화 제도</strong>인데요, 여러 다른 목소리를 하나로 모아 회사와 효과적으로 협상하고, 그 결과를 우리 사업장 전체에 적용하기 위한 약속 같은 거예요.</p>
            <h4>교섭대표노동조합의 역할과 중요성:</h4>
            <ul>
                <li><strong>하나의 창구:</strong> 가장 중요한 건, 일단 교섭대표노동조합으로 정해지면 다른 작은 노조들은 회사와 직접 이야기할 수 없게 된다는 점이에요. 오직 교섭대표노동조합만이 회사와 협상 테이블에 앉을 수 있는 '독점 교섭권'을 갖게 되는 거죠. 엄청난 힘이 주어지는 만큼, 교섭대표노동조합에게는 정말 큰 책임이 따라야겠죠?</li>
                <li><strong>하나의 협약:</strong> 만약 여러 노조가 각자 회사랑 협상해서 규칙이 제각각이라면 너무 복잡할거에요. 교섭대표노조와 회사가 맺은 하나의 단체협약을 통해 우리 회사 전체에 통일된 근로조건을 마련할 수 있어요. 모두에게 똑같이 적용되는 깔끔한 규칙이 생기는 거에요!</li>
            </ul>
            <p>결국, 막강한 힘과 무거운 책임을 가진 교섭대표노동조합이 우리 사업장 내 '작은 국회'처럼 얼마나 책임감을 갖고, 모든 동료들의 목소리를 소외 없이 골고루 담아내며 주도적으로 활동하느냐에 따라, 우리 모두를 위한 약속 즉, 우리 모두의 권익을 지켜줄 직장 규칙의 수준과 깊이가 결정된답니다. 우리가 가입할 노동조합을 선택하는 것은 '작은 국회'의 국회의원을 뽑는 것과 같아요. 정말 중요한 선택이죠?</p>
        `
    },
    localAutonomy: {
        title: "<i class='fas fa-city card-icon'></i> 직장 규칙 vs 동네 규칙",
        content: `
            <p>우리가 사는 동네나 시, 도에도 자체적인 규칙이 있죠? 이걸 '조례'라고 하고, 주민들이 뽑은 지방의회에서 만들어요. 이걸 '지방자치'라고 하는데요, 노동조합이 직장 규칙을 만드는 '직장자치'와 비슷한 점이 많답니다!</p>
            <h4>지방자치와 직장자치, 뭐가 같고 뭐가 다를까요?</h4>
            <ul>
                <li><strong>같은 점:</strong>
                    <ul>
                        <li><strong>스스로 규칙 만들기:</strong> 둘 다 특정 공간(지역 vs 직장)의 구성원들이 스스로의 대표(지방의원 vs 노조간부)를 통해 자신들에게 맞는 규칙(조례 vs 단체협약)을 만들어요.</li>
                        <li><strong>상위법 테두리 안에서:</strong> 지방자치도 나라법을 어길 수 없듯, 직장자치도 노동법 같은 상위법을 지켜야 해요.</li>
                        <li><strong>민주적 절차:</strong> 규칙 만들 때 주민/조합원 의견 듣고, 토론하고, 투표하는 등 민주적인 과정을 거쳐요.</li>
                    </ul>
                </li>
                <li><strong>다른 점:</strong>
                    <ul>
                        <li><strong>'파업'이라는 강력한 카드:</strong> 직장자치에서는 노동조합이 '파업' 같은 단체행동을 통해 회사에 압력을 넣어 규칙을 만들 수 있어요. 하지만 지방자치에서는 주민들이 조례를 만들기 위해 이런 직접적인 압력 수단을 쓰긴 어렵죠. 그래서 노조의 규칙 만드는 힘이 때론 더 강력할 수 있어요!</li>
                        <li><strong>협상의 상대방:</strong> 단체협약은 반드시 회사(사용자)와 직접 협상해서 만들지만, 조례는 지방의회가 일방적으로 결정해서 만들어요. (물론 주민 의견은 듣지만요!)</li>
                        <li><strong>어겼을 때 처벌:</strong> 조례를 어기면 보통 과태료 같은 행정처분을 받지만, 단체협약을 어기면 (앞서 말했듯) 형사처벌(벌금)까지 받을 수 있어서 더 강력한 제재를 가질 수 있어요.</li>
                    </ul>
                </li>
            </ul>
            <p>이렇게 비교해보니 노동조합의 '직장자치'가 얼마나 중요한지, 또 얼마나 큰 힘을 가질 수 있는지 알 수 있겠죠? 우리 손으로 우리 직장을 더 좋게 만들어가는 거니까요!</p>
        `
    },
    nationalAssembly: {
        title: "<i class='fas fa-landmark card-icon'></i> 노조 활동, 국회랑 비슷해?",
        content: `
            <p>국회에서 국회의원들이 법을 만드는 과정, TV에서 많이 보셨죠? 놀랍게도 우리 노동조합이 회사와 단체협상을 하고 단체협약을 만드는 과정도 국회와 아주 비슷하답니다!</p>
            <h4>국회 입법 vs 노조 단체교섭, 닮은 점 찾아볼까요?</h4>
            <ul>
                <li><strong>대표를 통한 의견 수렴:</strong> 국회의원은 국민을 대표해서 법을 만들죠? 노동조합 임원이나 교섭위원들도 조합원들을 대표해서 회사와 협상해요. 조합원 총회나 대의원대회에서 의견을 모으고, 뭘 요구할지 결정하는 과정이 꼭 국회 같아요.</li>
                <li><strong>협상과 타협은 필수!:</strong> 국회에서 여당과 야당이 서로 의견이 다를 때 막 토론하고 협상해서 합의점을 찾잖아요? 노동조합과 회사도 마찬가지예요. 서로 원하는 게 다르니까, 치열하게 협상하고 조금씩 양보하면서 모두에게 좋은 합의(단체협약)를 만들어가는 거죠.</li>
                <li><strong>압박과 견제도 있어요:</strong> 국회에서 야당이 정부를 견제하기 위해 필리버스터(무제한 토론)를 하거나 국정감사를 하는 것처럼, 노동조합도 회사에 우리의 요구를 관철하기 위해 파업, 태업, 집회 같은 단체행동을 하기도 해요. 이건 회사가 일방적으로 결정하지 못하게 막고, 우리의 목소리를 듣게 하는 중요한 수단이에요.</li>
                <li><strong>갈등 끝에 더 나은 합의:</strong> 가끔 국회에서 싸우는 모습 보면 답답하죠? 노사관계도 마찬가지로 교섭이 잘 안 풀리면 파업 같은 갈등이 생길 수 있어요. 하지만 이런 갈등은 결국 더 좋은 합의를 만들기 위한 과정일 수 있답니다. 문제를 드러내고 함께 해결책을 찾는 거죠.</li>
            </ul>
            <p>어때요? 노동조합이 단체협약을 만드는 과정, 정말 국회에서 법 만드는 과정과 비슷하지 않나요? 우리도 직장이라는 작은 사회에서 민주적인 방법으로 규칙을 만들고 있는 거랍니다!</p>
        `
    },
    foreignCases: {
        title: "<i class='fas fa-globe-americas card-icon'></i> 다른 나라는 어떨까?",
        content: `
            <p>우리나라뿐만 아니라, 세계 여러 나라의 노동조합들도 활발하게 활동하며 직장 규칙을 만들고 있어요. 몇몇 나라의 특별한 사례를 살펴볼까요?</p>
            <h4>독일: 사장님과 같이 결정! '공동결정제도'</h4>
            <ul>
                <li>독일 노동조합은 정말 힘이 세요! '공동결정제도'라는 게 있어서, 일정 규모 이상 회사의 중요한 결정(투자, 구조조정, 사람 뽑는 문제 등)에 노동자 대표가 직접 참여해요. 회사 감독위원회에 노동자 대표가 거의 절반이나 들어간대요! 이건 단순한 협상을 넘어, 회사 운영 규칙 자체를 함께 만드는 거나 마찬가지죠.</li>
            </ul>
            <h4>스웨덴: 업종 전체가 함께! '산업별 단체교섭'</h4>
            <ul>
                <li>스웨덴은 개별 회사 노조보다 '산업별 노조'가 중심이에요. 예를 들어 '금속노조', '운수노조' 이런 식으로요. 이 산업별 노조가 그 업종 전체 사용자 단체랑 중앙에서 크게 협상을 해서 임금이나 주요 근로조건을 정해요. 그럼 그 업종 모든 회사에 적용되는 거죠. 이걸 '연대임금정책'이라고도 하는데, 잘 나가는 회사든 아니든 같은 업종이면 비슷한 대우를 받게 하려는 거예요. 사회 전체의 평등을 생각하는 거죠!</li>
            </ul>
            <h4>프랑스: 거리에서 외치다! '사회적 대화와 정치적 힘'</h4>
            <ul>
                <li>프랑스 노동조합은 정치적인 목소리도 아주 크게 내요. 정부가 노동법을 안 좋게 바꾸려고 하거나, 연금 제도를 바꾸려고 할 때 대규모 파업이나 시위를 벌여서 정부 정책에 직접 영향을 미치기도 해요. 2016년에 노동법 바꾸려다 노조 반대로 크게 애먹었던 적도 있대요. 이건 회사를 넘어 나라 전체의 규칙(법)을 만드는 데도 노동조합이 참여하는 모습이죠.</li>
            </ul>
            <p>이런 나라들 사례를 보면, 노동조합이 단순히 우리 회사 일만 하는 게 아니라, 산업 전체, 더 나아가 나라 전체의 좋은 규칙을 만드는 데도 큰 역할을 할 수 있다는 걸 알 수 있어요. 우리도 배울 점이 많겠죠?</p>
        `
    },
    limitations: {
        title: "<i class='fas fa-exclamation-triangle card-icon'></i> 우리의 숙제: 현실의 벽",
        content: `
            <p>노동조합이 직장 규칙을 만드는 중요한 역할을 하지만, 안타깝게도 우리나라에서는 아직 여러 어려움에 부딪히고 있어요. 우리가 함께 넘어야 할 벽들이죠.</p>
            <h4>우리가 풀어야 할 숙제들:</h4>
            <ul>
                <li><strong>아직은 적은 조합원 수 (낮은 조직률):</strong> 우리나라 전체 노동자 중에 노동조합에 가입한 사람은 아직 15%가 채 안 돼요. (2022년 기준 14.2%) OECD 평균(16.5%)보다도 낮죠. 특히 비정규직 노동자, 작은 회사 노동자, 요즘 많이 늘어난 플랫폼 노동자(배달 라이더 등)들은 노조 보호를 잘 못 받고 있어요. 이러면 노동조합이 모든 노동자를 대표해서 규칙을 만든다고 하기엔 좀 부족하겠죠?</li>
                <li><strong>까다로운 법과 제도:</strong> 우리가 단체행동(파업 등)을 하려면 법에서 정한 조건들이 꽤 까다로워요. '필수공익사업장'(병원, 전기, 가스 등)은 파업도 마음대로 못하고, 불법 파업으로 몰리면 처벌도 세게 받아요. 회사가 파업 때 다른 사람을 데려와 일 시키는 '대체근로'도 가능하고요. 이런 것들이 노동조합이 회사랑 협상할 때 힘을 제대로 못 쓰게 만들어요.</li>
                <li><strong>오해와 편견 (사회적 신뢰 문제):</strong> 안타깝게도 어떤 사람들은 노동조합을 보면 '자기들 밥그릇만 챙긴다', '맨날 싸움만 한다'고 오해해요. 일부 노조의 과격한 모습만 언론에 나오다 보니 그런 이미지가 생긴 것 같아요. 이러면 노동조합이 좋은 규칙을 만들어도 사회적으로 인정받기 어렵겠죠?</li>
                <li><strong>회사별 노조 중심의 한계:</strong> 우리나라는 대부분 회사별로 노조가 있다 보니, 우리 회사 문제에만 집중하기 쉬워요. 독일이나 스웨덴처럼 산업 전체의 기준을 만들거나 사회 전체에 영향을 주기는 아직 힘이 부족해요.</li>
            </ul>
            <p>이런 문제들을 해결해야 노동조합이 진정한 '직장 내 입법기관'으로 더 튼튼하게 자리 잡을 수 있을 거예요. 우리 모두의 관심과 노력이 필요해요!</p>
        `
    },
    strengtheningMeasures: {
        title: "<i class='fas fa-tools card-icon'></i> 더 강한 노조! 어떻게?",
        content: `
            <p>우리 노동조합이 '직장 내 작은 국회' 역할을 더 잘하려면 어떻게 해야 할까요? 몇 가지 아이디어를 함께 나눠봐요!</p>
            <h4>노동조합, 이렇게 강해질 수 있어요!</h4>
            <ul>
                <li><strong>법과 제도, 우리에게 유리하게!:</strong>
                    <ul>
                        <li><strong>단체행동권 확대:</strong> 지금은 파업 같은 단체행동을 하려면 조건이 너무 까다로워요. 이걸 좀 완화해서 우리가 회사랑 협상할 때 더 힘을 가질 수 있도록 해야 해요. 정치적인 문제나 다른 회사 노조를 돕기 위한 연대 파업도 좀 더 자유롭게 할 수 있어야 사회 전체에 좋은 영향을 줄 수 있겠죠?</li>
                        <li><strong>산업별 교섭 활성화:</strong> 스웨덴처럼 우리도 업종별로 큰 노조(산업별 노조)를 만들고, 그 업종 전체 회사들과 한꺼번에 교섭하는 시스템을 만들면 좋겠어요. 그러면 우리 회사뿐 아니라 비슷한 일을 하는 모든 노동자들이 좋은 조건에서 일할 수 있는 기준이 만들어질 거예요.</li>
                    </ul>
                </li>
                <li><strong>디지털 시대, 스마트하게 조직하자!:</strong>
                    <ul>
                        <li><strong>온라인으로 뭉치자:</strong> 요즘 다들 스마트폰 쓰시죠? 온라인으로 조합원 의견도 쉽게 모으고, 투표도 하고, 우리 활동도 널리 알릴 수 있어요. 특히 배달 라이더나 프리랜서처럼 여기저기 흩어져 일하는 분들도 온라인으로 쉽게 노조에 가입하고 활동할 수 있게 해야 해요.</li>
                        <li><strong>새로운 방식의 단체행동:</strong> 꼭 거리로 나가서 파업만 해야 할까요? 온라인 서명운동, SNS를 통한 알리기, 가상 집회 같은 새로운 방법도 고민해볼 수 있어요. 빅데이터나 인공지능 같은 기술을 활용해서 더 효과적인 협상 전략을 짤 수도 있고요!</li>
                    </ul>
                </li>
                <li><strong>우리 스스로의 노력도 중요해요!:</strong>
                    <ul>
                        <li><strong>투명하고 민주적인 운영:</strong> 노동조합 운영을 투명하게 공개하고, 모든 결정 과정에 조합원들이 적극적으로 참여할 수 있도록 해야 해요. 그래야 조합원들이 믿고 따를 수 있겠죠?</li>
                        <li><strong>사회 전체를 생각하는 노조:</strong> 우리 조합원 이익만 챙기는 게 아니라, 사회 전체에 도움이 되는 활동도 하고, 어려운 이웃도 돕는 모습을 보여줘야 해요. 그래야 사회적으로도 인정받고 지지받을 수 있어요.</li>
                    </ul>
                </li>
            </ul>
            <p>이런 노력들이 합쳐지면, 우리 노동조합은 더 많은 노동자들을 대표하고, 더 좋은 직장 규칙을 만들고, 사회 전체에도 긍정적인 영향을 주는 든든한 조직으로 발전할 수 있을 거예요!</p>
        `
    },
    democracyRole: {
        title: "<i class='fas fa-balance-scale card-icon'></i> 노조, 민주주의의 파트너!",
        content: `
            <p>노동조합이 직장 규칙을 만드는 건, 단순히 우리 밥그릇 싸움이 아니에요. 우리 사회 전체의 민주주의를 더 건강하고 풍요롭게 만드는 아주 중요한 일이랍니다!</p>
            <h4>노동조합, 민주주의에 어떤 도움을 줄까요?</h4>
            <ul>
                <li><strong>국회와 정부를 돕는 역할:</strong> 국회나 정부가 모든 직장의 사정을 다 알 수는 없겠죠? 노동조합은 현장에서 일하는 우리들의 목소리를 직접 전달해서, 더 현실적이고 좋은 법과 정책을 만드는 데 도움을 줘요. 예를 들어, 플랫폼 노동자들의 어려움을 노조가 알리면서 이들을 보호하는 법을 만들자는 논의가 시작된 것처럼요.</li>
                <li><strong>참여 민주주의 확대:</strong> 국회의원 뽑는 선거만 민주주의가 아니에요. 노동조합 활동을 통해 우리 직장 문제에 직접 참여하고 목소리를 내는 것 자체가 바로 민주주의를 실천하는 거예요. 이건 교과서에서 배우는 '대의 민주주의'의 부족한 점을 채워주는 '참여 민주주의'랍니다.</li>
                <li><strong>사회 갈등 해결사:</strong> 회사와 노동자 사이에는 항상 의견 차이가 있을 수밖에 없어요. 노동조합은 이런 갈등을 대화와 협상이라는 평화적인 방법으로 풀어나가는 역할을 해요. 마치 말다툼 대신 법정에서 문제를 해결하는 것처럼, 제도 안에서 질서를 만드는 거죠.</li>
                <li><strong>약한 사람들의 방패막이:</strong> 솔직히 개인이 회사랑 맞서 싸우긴 어렵잖아요? 노동조합은 이렇게 힘없는 개인들을 뭉치게 해서, 회사와 동등하게 이야기할 수 있도록 도와줘요. 이건 민주주의가 단순히 다수결이 아니라, 약한 사람들의 권리도 지켜야 한다는 중요한 가치를 실현하는 거예요.</li>
            </ul>
            <h4>하지만, 우리도 기억해야 할 점이 있어요!</h4>
            <p>노동조합이 이런 좋은 역할을 하려면, 우리 조합원만의 이익을 넘어 사회 전체를 생각하는 넓은 마음을 가져야 해요. 때로는 우리 행동이 사회에 부담을 주거나 다른 사람들에게 피해를 줄 수도 있다는 점을 항상 생각하고, 더 많은 사람들의 공감을 얻기 위해 노력해야겠죠?</p>
            <p>노동조합이 진정한 민주주의의 파트너로 우뚝 설 때, 우리 직장뿐 아니라 우리 사회 전체가 더 살기 좋은 곳이 될 거예요!</p>
        `
    },
    bargainingUnificationProblems: {
        title: "<i class='fas fa-balance-scale-left card-icon'></i> 물류 노동자는 물류노조로 하나되자!",
        content: `
            <p>우리 회사처럼 여러 노동조합이 함께 있다면, 회사는 원칙적으로 단 하나의 '교섭대표노동조합'과만 이야기한다고 했죠? 복잡한 교섭을 단순하게 만들고, 모든 조합원의 근로조건을 통일하려는 좋은 뜻에서 시작된거에요.</p>
            <h4>하지만, 현실은 어떨까요?</h4>
            <ul>
                <li><strong>소수 노조의 설움:</strong> 교섭대표가 되지 못한 소수 노조는 단체교섭권이 없어서, 목소리를 내기 힘들어요. 이렇게 소수노조의 단체교섭권을 박탈하는 교섭창구단일화 제도에 대해 '과잉금지원칙 위반'이라 위헌이라는 헌법재판 소수의견도 있었아요. 5대 4로 아슬아슬하게 위헌 판단이 갈렸답니다.</li>
                <li><strong>우리 사업장의 현실:</strong> 운전직이 대다수이다 보니, 늘 운전직 중심 노조가 교섭대표가 되죠. 현장의 우리 물류 사업소 노동자들처럼 소수 직종의 간절한 요구는 협상 테이블에 오르기도 어려워요. 한 교섭단위 안에 여러 직종이 섞여 있으면 다수 직종에 밀리기 쉽습니다.</li>
            </ul>
            <h4>공정대표의무, 제대로 지켜지고 있나요?</h4>
            <p>우리 노조법은 소수노조의 교섭권 침해를 방지하고 교섭대표노조와 회사가 소수 노조를 차별하지 않도록 <strong>공정대표의무</strong>를 부여했어요. 
            <ul>
                <li><strong>모든 조합원의 목소리 대변:</strong> 교섭대표노동조합은 단순히 자신들 조합원의 이익뿐만 아니라, 교섭창구 단일화 절차에 참여한 모든 노동조합과 그 조합원, 나아가 해당 사업장 전체 노동자들의 이해관계를 공정하게 대변해야 해요.</li>
                <li><strong>적극적인 정보 공유와 의견 수렴:</strong> 소수 노조의 의견을 경청하고, 교섭 과정과 결과에 대한 정보를 투명하게 공유하며, 그들의 입장이 단체협약에 합리적으로 반영될 수 있도록 적극적으로 노력해야 합니다. 이는 단순한 시혜가 아니라, 제도의 정당성을 확보하고 노동자 간의 단결을 유지하기 위한 필수적인 역할이에요.</li>
            </ul>
            <p>하지만 현실은 어떨까요? 회의자료도 제대로 안 주고, 형식적인 회의로 끝나는 경우가 많아요. 이는 '절차적 공정대표의무' 위반일 수 있습니다!</p>
            <h4>우리의 목소리, 어떻게 찾을까요?</h4>
            <p>노동 3권의 핵심은 우리 스스로 근로조건을 결정하는 <strong>자기결정권</strong>과 <strong>집단적 자치</strong>예요. 현재 제도는 이를 제한할 수 있다는 비판을 받고 있지만, 물류 사업소 노동자들이 하나되어 힘을 합치면 우리의 목소리를 대변 할 수 있는 '교섭대표'를 만들어 낼 수 있어요. <strong>물류 사업소 노동자는 물류노조로 뭉치자!</strong> 이것이 우리의 권리를 찾고, 진정한 자치를 실현하는 첫 걸음이 될 수 있답니다.</p>
        `
    }
};


const modal = document.getElementById("myModal");
const modalTitle = document.getElementById("modal-title");
const modalBodyContent = document.getElementById("modal-body-content");
const modalReturnBtn = modal.querySelector(".modal-return-btn");
const modalCloseBtn = modal.querySelector(".modal-close-btn");

const toggleButtons = document.querySelectorAll('.card .toggle-details-btn');
let previouslyFocusedElement;

function openModal(targetId) {
    const data = modalData[targetId];
    if (data) {
        previouslyFocusedElement = document.activeElement;

        modalTitle.innerHTML = data.title;
        modalBodyContent.innerHTML = data.content;
        
        const card = document.querySelector(`.card button[data-modal-target="${targetId}"]`).closest('.card');
        const cardDataColor = card.dataset.color;
        const iconInTitle = modalTitle.querySelector('.fas, .far, .fab, .card-icon');
        
        if (iconInTitle) {
            const colorVarName = `--${cardDataColor.replace('custom-', 'custom-color-')}`;
            const colorVarValue = getComputedStyle(document.documentElement).getPropertyValue(colorVarName).trim();

            if (colorVarValue) {
                 iconInTitle.style.color = colorVarValue;
            } else {
                 console.warn(`CSS variable ${colorVarName} not found for modal icon. Falling back to default.`);
                 iconInTitle.style.color = 'var(--blue-500)';
            }
        }

        modal.style.display = "flex";
        modal.classList.remove('fade-out');
        document.body.style.overflow = 'hidden';
        modalBodyContent.scrollTop = 0;

        modal.focus(); 
        const firstFocusable = modalCloseBtn || modalReturnBtn;
        if(firstFocusable) firstFocusable.focus();

    } else {
        console.error("해당 타겟에 대한 모달 데이터를 찾을 수 없습니다:", targetId);
    }
}

function closeModal() {
    modal.classList.add('fade-out');
    setTimeout(() => {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
        if (previouslyFocusedElement) {
            previouslyFocusedElement.focus();
        }
    }, 280); 
}

function trapFocusInModal(event) {
    if (event.key !== 'Tab' || modal.style.display === "none") {
        return;
    }

    const focusableElements = Array.from(
        modal.querySelectorAll(
            'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'
        )
    ).filter(el => el.offsetParent !== null && !el.disabled);

    if (focusableElements.length === 0) return;

    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) { 
        if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            event.preventDefault();
        }
    } else { 
        if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            event.preventDefault();
        }
    }
}

toggleButtons.forEach(button => {
    button.addEventListener("click", function() {
        const targetId = this.dataset.modalTarget;
        openModal(targetId);
    });
});

if (modalReturnBtn) {
    modalReturnBtn.addEventListener("click", closeModal);
}
if (modalCloseBtn) { 
    modalCloseBtn.addEventListener("click", closeModal);
}

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

window.addEventListener("keydown", function(event) {
    if (event.key === "Escape" || event.key === "Esc") {
        if (modal.style.display === "flex") {
            closeModal();
        }
    }
});

modal.addEventListener('keydown', trapFocusInModal);

window.addEventListener('scroll', function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (height > 0) ? (winScroll / height) * 100 : 0;
    const progressBar = document.getElementById('progressBar');
    if(progressBar) {
        progressBar.style.width = scrolled + '%';
    }
});