import React, {Component} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'


const TemplateBlock = styled.div`
    width: 700px;
    height: 800px;
    /* position: relative; //배경위에 나타나게 하려고 설정 */
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    margin: 0 auto; // 페이지 중앙에 나타나도록 설정
    margin-top: 60px;
    border:  2px solid black;
`;

const HeadBlock = styled.div`
    padding: 40px 32px 24px 32px;
    border-bottom: 1px solid #e9ecef;
    text-align: center;

    h1 {
        margin: 0 0 25px;
        /* margin-bottom: 20px; */
        font-size: 36px;
        color: #343a40;
        font-weight: 500;
    }
    .tag {
        margin-top: 15px;
        color: #868e96;
        font-size: 21px;
    }
`;

const StartButton = styled.button`
    width: 700px;
    height: 55px;
    display: block;
    margin : auto;
    background: pink;
    border-radius: 16px;
    cursor: pointer;
    margin-top: 15px;
    font-weight: bold;
    font-size: 18px;
    /* color: white; */
    border: 0; //버튼 테두리 없애기
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    &:hover {
        background: #FFDEE9;
    }
    //======== styled.div 일때
    /* text-align: center; */
`;

// const Eh = (co) => {
//     co.setAttribute('src', '../../src/enfj.png')
// }
// const  Ih= (co) => {
//     co.setAttribute('src', '../../src/isfp.png')
// }


// const TodoTemplate = () => {
//     return (
//         <>
//             <TemplateBlock>
//                 <HeadBlock>
//                     <h1>나의 여행 유형은?</h1>
//                     <div>자신의 MBTI 성격 유형으로 여행지를 추천받아 보세요💕</div>
//                     <div>나와 여행 궁합이 잘 맞는 친구도 알 수 있습니다!</div>
//                     <div className="tag">#성격유형테스트 &nbsp; #나와 어울리는 동행자  &nbsp; #계획 무계획</div>
//                 </HeadBlock>
//                 TEST
//             </TemplateBlock>
//             <Link to="/start">
//                 <StartButton>시작하기</StartButton>
//             </Link>
//         </>
//     )
// }

class TodoTemplate extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: {}
    };
  }

    componentDidMount() {
      console.log('did Mount')
      fetch('//localhost:3000/question/3').then((data) => {
        if(data.ok) {
          data.json().then((res) => {
            // this.state.data= res;
            this.setState({data: res});
          })
        }
      });
  } 

    render = () => 
      <>
            <TemplateBlock>
                <HeadBlock>
                    <h1>나의 여행 유형은?</h1>
                    <div>자신의 MBTI 성격 유형으로 여행지를 추천받아 보세요💕</div>
                    <div>나와 여행 궁합이 잘 맞는 친구도 알 수 있습니다!</div>
                    <div className="tag">#성격유형테스트 &nbsp; #나와 어울리는 동행자  &nbsp; #계획 무계획</div>
                </HeadBlock>
                {this.state.data.question}
            </TemplateBlock>
            <Link to="/start">
                <StartButton>시작하기</StartButton>
            </Link>
        </>
  }

export default TodoTemplate;
//https://www.naver.com/