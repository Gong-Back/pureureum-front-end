import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';

import * as styles from './ProjectApplyTemplate.style'

const ProjectApplyTemplate = () => {
  const aaa = 'aaa';

  return (
    <div>
      <h3>프로젝트 신청</h3>
      <section>
        <div>
          <Text fontStyleName="subtitle1" color={COLORS.grayscale.gray600}>
            참가자 정보
          </Text>
          <styles.InfoSection>
            <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
              이름
            </Text>
            <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
              공백
            </Text>
            <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
              닉네임
            </Text>
            <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
              gongback
            </Text>
            <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
              나이
            </Text>
            <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
              25세
            </Text>
            <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
              성별
            </Text>
            <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
              여
            </Text>
            <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
              전화번호
            </Text>
            <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
              010-1234-1234
            </Text>
          </styles.InfoSection>
        </div>
        <div>
          <Text fontStyleName="subtitle1" color={COLORS.grayscale.gray600}>
            참가비용 입금
          </Text>
          <Text fontStyleName="body2R" color={COLORS.grayscale.gray500}>
            푸르름은 아직 결제 서비스를 지원하지 않습니다. 하단에 기재되어 있는
            계좌로 참가비를 송금해주세요.
          </Text>
          <styles.BankingSection>
            <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
              계좌
            </Text>
            <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
              293201-04-201136
            </Text>
            <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
              은행
            </Text>
            <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
              국민은행
            </Text>
            <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
              예금주
            </Text>
            <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
              공소나
            </Text>
            <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
              금액
            </Text>
            <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
              KRW 10,000
            </Text>
            <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
              문의
            </Text>
            <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
              010-1234-1234
            </Text>
          </styles.BankingSection>
        </div>
        <styles.CheckBoxSection>
          <input type="checkbox" />
          <Text fontStyleName="body1R" color={COLORS.grayscale.gray500}>
            참가비용을 입금했나요?
          </Text>
          <input type="checkbox" />
          <Text fontStyleName="body1R" color={COLORS.grayscale.gray500}>
            프로젝트 유의사항을 제대로 확인했나요?
          </Text>
        </styles.CheckBoxSection>
        <styles.Aside>
          <Text fontStyleName="subtitle2B" color={COLORS.primary.logo}>
            우리 함께 감자 농장 체험해요!
          </Text>
          <Text fontStyleName="body2R" color={COLORS.grayscale.gray600}>
            그런데 스프링 프레임워크는 기능도 너무 많고 광범위해서 어디서부터
            어떻게 시작해야 할지 막막합니다.또 너무 많은 유연성을 제공해서, 어떤
            기술들을 함께 사용해야 할지 선택하기 어렵습니다. 기능이 점점
            증가하면서 더 많은 설정들이 필요해지기 시작했습니다.
          </Text>
          <div>
            <Text fontStyleName="body2B" color={COLORS.primary.greenDefault}>
              주관
            </Text>
            <Text fontStyleName="body2R" color={COLORS.grayscale.gray600}>
              감자농장 소유주
            </Text>
            <Text fontStyleName="body2B" color={COLORS.primary.greenDefault}>
              위치
            </Text>
            <Text fontStyleName="body2R" color={COLORS.grayscale.gray600}>
              고양시 송산읍 감자농장
            </Text>
            <Text fontStyleName="body2B" color={COLORS.primary.greenDefault}>
              기간
            </Text>
            <Text fontStyleName="body2R" color={COLORS.grayscale.gray600}>
              2023.03.01 ~ 2023.04.01
            </Text>
          </div>
          <div>
            <Text fontStyleName="body2B" color={COLORS.grayscale.gray600}>
              좋아요
            </Text>
            <Text fontStyleName="body2B" color={COLORS.grayscale.gray600}>
              관심 등록
            </Text>
            <Text fontStyleName="body2B" color={COLORS.grayscale.gray600}>
              URL 공유
            </Text>
          </div>
        </styles.Aside>
      </section>
    </div>
  );
};

export default ProjectApplyTemplate;
