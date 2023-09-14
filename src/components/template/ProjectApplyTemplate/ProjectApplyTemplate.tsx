import { useRouter } from 'next/router';
import BookmarkIconSvg from '@/assets/icons/bookmarkIcon.svg';
import HeartIconSvg from '@/assets/icons/heartIcon.svg';
import LeftIconSvg from '@/assets/icons/leftIcon.svg';
import ShareURLIconSvg from '@/assets/icons/shareURLIcon.svg';
import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import { UserResponses } from '@/constants/types';
import * as styles from './ProjectApplyTemplate.style';

const menuList = [
  { label: '좋아요', icon: HeartIconSvg, onClick: () => {} },
  { label: '관심 등록', icon: BookmarkIconSvg, onClick: () => {} },
  { label: 'URL 공유', icon: ShareURLIconSvg, onClick: () => {} },
];

interface ProjectApplyTemplateProps {
  userData: UserResponses['info'];
}

const ProjectApplyTemplate = ({ userData }: ProjectApplyTemplateProps) => {
  const router = useRouter();
  const { name, nickname, birthday, gender, phoneNumber } = userData;

  const age = new Date().getFullYear() - new Date(birthday).getFullYear() + 1;

  return (
    <styles.Wrapper>
      <styles.MainSection>
        <styles.Header>
          <LeftIconSvg
            width={35}
            height={35}
            fill={COLORS.grayscale.gray700}
            onClick={() => router.back()}
          />
          <Text fontStyleName="title" color={COLORS.grayscale.gray700}>
            프로젝트 신청
          </Text>
        </styles.Header>
        <styles.InfoSection>
          <Text fontStyleName="subtitle1" color={COLORS.grayscale.gray600}>
            참가자 정보
          </Text>
          <styles.InfoDetail>
            <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
              이름
            </Text>
            <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
              {name}
            </Text>
            <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
              닉네임
            </Text>
            <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
              {nickname}
            </Text>
            <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
              나이
            </Text>
            <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
              {age}
            </Text>
            <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
              성별
            </Text>
            <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
              {gender}
            </Text>
            <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
              전화번호
            </Text>
            <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
              {phoneNumber}
            </Text>
          </styles.InfoDetail>
        </styles.InfoSection>
        <styles.BankingSection>
          <Text fontStyleName="subtitle1" color={COLORS.grayscale.gray600}>
            참가비용 입금
          </Text>
          <Text fontStyleName="body2R" color={COLORS.grayscale.gray500}>
            푸르름은 아직 결제 서비스를 지원하지 않습니다. 하단에 기재되어 있는
            계좌로 참가비를 송금해주세요.
          </Text>
          <styles.BankingDetail>
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
            <Text fontStyleName="body1R" color={COLORS.primary.dark}>
              KRW 10,000
            </Text>
            <Text fontStyleName="body1B" color={COLORS.grayscale.dark}>
              문의
            </Text>
            <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
              010-1234-1234
            </Text>
          </styles.BankingDetail>
        </styles.BankingSection>
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
          <Text fontStyleName="subtitle2B" color={COLORS.primary.dark}>
            우리 함께 감자 농장 체험해요!
          </Text>
          <Text fontStyleName="body2R" color={COLORS.grayscale.gray600}>
            그런데 스프링 프레임워크는 기능도 너무 많고 광범위해서 어디서부터
            어떻게 시작해야 할지 막막합니다.또 너무 많은 유연성을 제공해서, 어떤
            기술들을 함께 사용해야 할지 선택하기 어렵습니다. 기능이 점점
            증가하면서 더 많은 설정들이 필요해지기 시작했습니다.
          </Text>
          <styles.FacilityDetail>
            <div className="option">
              <Text fontStyleName="body2B" color={COLORS.primary.default}>
                주관
              </Text>
              <Text fontStyleName="body2R" color={COLORS.grayscale.gray600}>
                감자농장 소유주
              </Text>
            </div>
            <div className="option">
              <Text fontStyleName="body2B" color={COLORS.primary.default}>
                위치
              </Text>
              <Text fontStyleName="body2R" color={COLORS.grayscale.gray600}>
                고양시 송산읍 감자농장
              </Text>
            </div>
            <div className="option">
              <Text fontStyleName="body2B" color={COLORS.primary.default}>
                기간
              </Text>
              <Text fontStyleName="body2R" color={COLORS.grayscale.gray600}>
                2023.03.01 ~ 2023.04.01
              </Text>
            </div>
          </styles.FacilityDetail>
          <styles.ShareSection>
            {menuList.map(({ icon: Icon, label, onClick }) => (
              <styles.ShareField key={label} onClick={onClick}>
                <Icon />
                <Text fontStyleName="body2B" color={COLORS.grayscale.gray600}>
                  {label}
                </Text>
              </styles.ShareField>
            ))}
          </styles.ShareSection>
        </styles.Aside>
      </styles.MainSection>
      <styles.ButtonSection>
        <Button
          themeColor={COLORS.primary.default}
          sizeType="medium"
          className="button"
          isFilled
          isRound
        >
          <Text fontStyleName="body2B" color={COLORS.grayscale.white}>
            신청 완료
          </Text>
        </Button>
        <Button
          themeColor={COLORS.grayscale.gray200}
          sizeType="medium"
          className="button"
          isRound
        >
          <Text fontStyleName="body2B" color={COLORS.grayscale.gray200}>
            이전으로
          </Text>
        </Button>
      </styles.ButtonSection>
    </styles.Wrapper>
  );
};

export default ProjectApplyTemplate;
