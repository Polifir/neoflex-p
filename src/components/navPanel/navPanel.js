import React from "react";
import "./NavPanel.sass";

function Navbar() {
  return (
    <nav className="header">
      <div className="header__logoContainer">
        <svg
          width="73"
          height="72"
          viewBox="0 0 73 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.16054 54.9782C6.89055 54.5949 6.52642 54.2889 6.1038 54.0903C5.69044 53.8952 5.23926 53.7952 4.78287 53.7973C4.28189 53.7934 3.78656 53.9042 3.33422 54.1214C2.89826 54.3383 2.5092 54.6401 2.18941 55.0093C1.86485 55.381 1.61109 55.81 1.44088 56.2745C1.26365 56.7562 1.17272 57.2658 1.17229 57.7795C1.16859 58.311 1.25956 58.8387 1.44088 59.3378C1.60928 59.7982 1.86167 60.2228 2.18501 60.5897C2.50339 60.9452 2.88981 61.2321 3.32102 61.4332C3.79731 61.644 4.31274 61.7499 4.83288 61.7438C5.35302 61.7377 5.86588 61.6197 6.33716 61.3977C6.80843 61.17 7.22356 60.8394 7.55243 60.4299L8.39341 61.1446C7.99722 61.6951 7.46625 62.1325 6.85232 62.4143C6.20652 62.6906 5.51074 62.8282 4.80928 62.8183C4.15797 62.8225 3.51252 62.6941 2.91153 62.441C2.33409 62.1975 1.81117 61.8394 1.37393 61.3878C0.936691 60.9363 0.59407 60.4006 0.366511 59.8128C-0.12217 58.5265 -0.12217 57.1035 0.366511 55.8173C0.58663 55.2251 0.923198 54.6838 1.35601 54.2261C1.78881 53.7684 2.30895 53.4035 2.88512 53.1536C3.4972 52.8898 4.15685 52.7568 4.82248 52.7629C5.45661 52.7629 6.08522 52.8818 6.67621 53.1136C7.26896 53.3494 7.78555 53.7458 8.16887 54.259L7.16054 54.9782Z"
            fill="white"
          />
          <path
            d="M15.3414 62.8009C14.6614 62.8074 13.9867 62.6792 13.3556 62.4235C12.7708 62.1824 12.2394 61.8262 11.7925 61.3758C11.3454 60.9222 10.9948 60.3814 10.7622 59.7865C10.2772 58.4995 10.2772 57.0779 10.7622 55.791C10.9948 55.1961 11.3454 54.6553 11.7925 54.2016C12.2394 53.7513 12.7708 53.3951 13.3556 53.1539C14.6299 52.6531 16.0442 52.6531 17.3184 53.1539C17.9046 53.3951 18.4374 53.7512 18.8859 54.2016C19.3331 54.6543 19.6824 55.1955 19.9119 55.791C20.4027 57.0769 20.4027 58.5006 19.9119 59.7865C19.6824 60.382 19.3331 60.9232 18.8859 61.3758C18.4374 61.8263 17.9046 62.1824 17.3184 62.4235C16.6902 62.6785 16.0186 62.8067 15.3414 62.8009ZM15.3414 61.7487C15.8473 61.7566 16.3492 61.6576 16.8149 61.458C17.2805 61.2584 17.6995 60.9628 18.045 60.59C18.3788 60.2237 18.639 59.7955 18.8111 59.3293C19.1852 58.3277 19.1852 57.2232 18.8111 56.2216C18.639 55.7553 18.3788 55.3271 18.045 54.9608C17.711 54.6004 17.308 54.312 16.8605 54.1129C16.3807 53.9079 15.8648 53.8022 15.3436 53.8022C14.8225 53.8022 14.3066 53.9079 13.8268 54.1129C13.3786 54.3109 12.9755 54.5995 12.6423 54.9608C12.3086 55.3281 12.0471 55.756 11.8718 56.2216C11.5036 57.2242 11.5036 58.3266 11.8718 59.3293C12.0471 59.7949 12.3086 60.2228 12.6423 60.59C12.9755 60.9513 13.3786 61.2399 13.8268 61.438C14.3028 61.6543 14.8193 61.7648 15.3414 61.7621V61.7487Z"
            fill="white"
          />
          <path
            d="M23.0996 53.0117H24.7684L27.9783 60.4922H28.0047L31.241 53.0117H32.8746V62.5566H31.7694V54.5655H31.743L28.3481 62.5566H27.6657L24.2708 54.5655H24.2444V62.5566H23.1216L23.0996 53.0117Z"
            fill="white"
          />
          <path
            d="M36.23 53.0112H39.0392C39.4579 53.0103 39.8755 53.0534 40.2853 53.14C40.6627 53.2178 41.0215 53.3685 41.342 53.584C41.6503 53.787 41.9031 54.0648 42.0773 54.3919C42.2732 54.7773 42.3687 55.2066 42.3547 55.6394C42.3705 56.0901 42.2688 56.5371 42.0597 56.9358C41.8752 57.2624 41.6155 57.5395 41.3024 57.7437C40.9931 57.9413 40.6518 58.0825 40.2941 58.161C39.9514 58.2384 39.6016 58.2785 39.2505 58.2809H37.3528V62.5694H36.23V53.0112ZM37.3528 57.2199H39.2549C39.7406 57.2422 40.2206 57.1068 40.6243 56.8337C40.7903 56.683 40.923 56.4988 41.0138 56.293C41.1047 56.0873 41.1516 55.8646 41.1516 55.6394C41.1516 55.4142 41.1047 55.1915 41.0138 54.9858C40.923 54.7801 40.7903 54.5959 40.6243 54.4452C40.2192 54.1756 39.7399 54.042 39.2549 54.0634H37.3572L37.3528 57.2199Z"
            fill="white"
          />
          <path
            d="M47.2464 53.0117H48.3032L52.3276 62.5566H51.0067L50.0468 60.2126H45.3223L44.3448 62.5566H43.0767L47.2464 53.0117ZM47.7528 54.4679H47.7264L45.7626 59.1604H49.6285L47.7528 54.4679Z"
            fill="white"
          />
          <path
            d="M54.5869 53.0117H55.9871L61.469 60.9406H61.4955V53.0117H62.6182V62.5566H61.2048L55.7185 54.6277H55.6921V62.5566H54.5693L54.5869 53.0117Z"
            fill="white"
          />
          <path
            d="M68.2281 58.4457L64.7056 53.0117H66.1146L68.7565 57.3269L71.4996 53.0117H72.8514L69.3289 58.4457V62.5566H68.2281V58.4457Z"
            fill="white"
          />
          <path
            d="M23.1259 67.1778C23.0281 67.0416 22.8999 66.9305 22.7516 66.8537C22.5832 66.7659 22.3952 66.7231 22.2056 66.7294C22.0924 66.7304 21.9799 66.7468 21.871 66.7782C21.7598 66.8109 21.6554 66.8636 21.5628 66.9336C21.4698 67.0051 21.3932 67.0959 21.3382 67.2C21.2783 67.3148 21.248 67.4431 21.2501 67.5729C21.2465 67.6966 21.2753 67.8192 21.3338 67.928C21.3888 68.0219 21.4622 68.1035 21.5496 68.1678C21.6449 68.2356 21.7485 68.2908 21.8578 68.332L22.2188 68.4563C22.3774 68.5096 22.5315 68.5629 22.69 68.625C22.848 68.6779 22.9967 68.7558 23.1303 68.8559C23.2588 68.9524 23.3641 69.0768 23.4385 69.2199C23.5243 69.3917 23.5652 69.5827 23.5574 69.7748C23.5637 69.9764 23.5198 70.1763 23.4297 70.3564C23.3507 70.5141 23.2379 70.6521 23.0995 70.7604C22.9598 70.8675 22.8015 70.9472 22.6327 70.9957C22.4545 71.0519 22.2691 71.0819 22.0823 71.0845C21.9464 71.0844 21.8107 71.071 21.6773 71.0445C21.5455 71.0172 21.417 70.9756 21.2942 70.9202C21.1719 70.8646 21.0566 70.7946 20.9507 70.7116C20.8495 70.6228 20.7566 70.5247 20.6733 70.4186L21.0652 70.1256C21.1684 70.2908 21.3086 70.4292 21.4747 70.5296C21.66 70.6393 21.872 70.6946 22.0868 70.6894C22.2047 70.6887 22.3218 70.6708 22.4346 70.6361C22.55 70.6031 22.6578 70.5473 22.7516 70.4718C22.8487 70.3986 22.9284 70.3046 22.985 70.1966C23.0456 70.0778 23.0773 69.9462 23.0773 69.8126C23.0773 69.679 23.0456 69.5473 22.985 69.4286C22.926 69.3231 22.843 69.2334 22.7428 69.1666C22.6358 69.0923 22.5186 69.034 22.395 68.9935C22.2673 68.9447 22.1308 68.9003 21.9855 68.8514C21.8357 68.8071 21.6886 68.7537 21.5452 68.6916C21.4042 68.6368 21.2733 68.5588 21.1577 68.4608C21.0434 68.3644 20.9504 68.2449 20.8847 68.11C20.8099 67.9491 20.7737 67.7727 20.779 67.5951C20.7735 67.4002 20.8191 67.2072 20.9111 67.0357C20.992 66.8817 21.1064 66.7481 21.2457 66.645C21.386 66.5447 21.5425 66.4696 21.7081 66.423C21.8703 66.378 22.0375 66.3542 22.2056 66.352C22.4731 66.3458 22.7383 66.402 22.9806 66.5163C23.1703 66.6022 23.3365 66.7332 23.4649 66.8981L23.1259 67.1778Z"
            fill="white"
          />
          <path
            d="M26.2348 70.5522H28.3174V70.9562H25.7812V66.4546H26.2216L26.2348 70.5522Z"
            fill="white"
          />
          <path
            d="M34.4824 68.7047C34.4869 69.03 34.427 69.353 34.3062 69.6547C34.1971 69.9352 34.0306 70.1893 33.8175 70.4006C33.6065 70.6115 33.3567 70.7788 33.0822 70.8934C32.4881 71.1302 31.8269 71.1302 31.2329 70.8934C30.9583 70.7788 30.7085 70.6115 30.4975 70.4006C30.2844 70.1893 30.1179 69.9352 30.0088 69.6547C29.7679 69.0462 29.7679 68.3676 30.0088 67.7591C30.1193 67.478 30.2856 67.2227 30.4975 67.0088C30.7085 66.7979 30.9583 66.6305 31.2329 66.516C31.8269 66.2792 32.4881 66.2792 33.0822 66.516C33.3567 66.6305 33.6065 66.7979 33.8175 67.0088C34.0294 67.2227 34.1957 67.478 34.3062 67.7591C34.4266 68.0594 34.4864 68.3808 34.4824 68.7047ZM34.0068 68.7047C34.0074 68.4491 33.9642 68.1952 33.8791 67.9544C33.7978 67.7243 33.6738 67.5119 33.5137 67.3284C33.351 67.1413 33.1516 66.9901 32.9281 66.8845C32.6859 66.775 32.4229 66.7205 32.1575 66.7247C31.8907 66.7204 31.6262 66.775 31.3826 66.8845C31.1602 66.99 30.9622 67.1412 30.8013 67.3284C30.6435 67.5196 30.5239 67.7397 30.4491 67.9766C30.2789 68.4621 30.2789 68.9917 30.4491 69.4772C30.5295 69.7064 30.6536 69.9176 30.8146 70.0987C30.9755 70.2859 31.1734 70.4372 31.3958 70.5426C31.6405 70.6486 31.9045 70.7015 32.1707 70.698C32.4355 70.7015 32.6981 70.6486 32.9413 70.5426C33.1648 70.437 33.3642 70.2859 33.5269 70.0987C33.6878 69.9176 33.812 69.7064 33.8923 69.4772C33.975 69.2299 34.0137 68.9699 34.0068 68.7091V68.7047Z"
            fill="white"
          />
          <path
            d="M40.0785 67.2664C39.9229 67.1004 39.7337 66.9701 39.5237 66.8845C39.289 66.7884 39.0373 66.7416 38.784 66.7469C38.5186 66.7427 38.2556 66.7973 38.0134 66.9068C37.7906 67.0135 37.5914 67.1645 37.4278 67.3507C37.2646 67.5334 37.1375 67.7458 37.0535 67.9767C36.8774 68.4611 36.8774 68.9928 37.0535 69.4772C37.132 69.7084 37.257 69.9208 37.4207 70.1011C37.5843 70.2814 37.7831 70.4257 38.0046 70.5249C38.2477 70.6309 38.5103 70.6838 38.7752 70.6803C39.0094 70.6826 39.2431 70.6558 39.4709 70.6004C39.6504 70.5568 39.8226 70.4864 39.9816 70.3917V69.0199H38.9425V68.616H40.4351V70.6403C40.1892 70.7881 39.9239 70.9002 39.647 70.9733C39.359 71.0454 39.0632 71.0812 38.7664 71.0799C38.4466 71.0836 38.1293 71.0233 37.8329 70.9023C37.5561 70.7915 37.3049 70.6243 37.095 70.4111C36.8852 70.198 36.7212 69.9436 36.6132 69.6637C36.4945 69.3613 36.4347 69.0388 36.4371 68.7136C36.4344 68.3894 36.4958 68.068 36.6176 67.768C36.7282 67.487 36.8945 67.2317 37.1064 67.0178C37.3174 66.8069 37.5671 66.6395 37.8417 66.525C38.1358 66.4065 38.4497 66.3463 38.7664 66.3474C39.0852 66.3396 39.4024 66.3955 39.6998 66.5116C39.9549 66.6113 40.1871 66.7624 40.3823 66.9556L40.0785 67.2664Z"
            fill="white"
          />
          <path
            d="M42.8345 70.9562H42.3369L44.2655 66.4546H44.7058L46.6256 70.9562H46.1192L45.6304 69.7753H43.3188L42.8345 70.9562ZM43.4905 69.3535H45.4587L44.4724 66.9651L43.4905 69.3535Z"
            fill="white"
          />
          <path
            d="M51.7069 70.2903V66.4546H52.1472V70.9562H51.5792L48.9813 67.085V70.9562H48.541V66.4546H49.109L51.7069 70.2903Z"
            fill="white"
          />
          <path
            d="M46.3439 22.7523C47.1296 22.5102 47.9723 22.5336 48.7436 22.8189C49.0342 22.9388 49.3204 23.0764 49.6242 23.2274C49.928 23.3783 50.1746 23.547 50.4476 23.729C50.9977 24.1044 51.5069 24.5374 51.9667 25.0209C52.9558 26.0869 53.6986 27.3604 54.1418 28.7501C54.6463 30.3429 54.8098 32.0255 54.6218 33.6868C54.4035 35.5612 53.8151 37.3726 52.8913 39.0141C52.313 40.024 51.4221 40.8148 50.3551 41.2649C50.1093 41.3635 49.856 41.4422 49.5978 41.5002C49.3548 41.5543 49.1069 41.5826 48.8581 41.5846C48.4005 41.599 47.9465 41.4983 47.5371 41.2916C47.1952 41.1089 46.9083 40.837 46.7061 40.5043C46.504 40.1717 46.3941 39.7904 46.3879 39.4004C46.364 38.5475 46.6176 37.7102 47.11 37.0164C47.7257 36.0788 48.1631 35.0341 48.4002 33.9354C48.6207 32.9136 48.6446 31.8586 48.4706 30.8277C48.431 30.5836 48.3693 30.335 48.3077 30.0997C48.2769 29.9842 48.2416 29.8688 48.2064 29.7534C48.1712 29.638 48.1227 29.5181 48.0787 29.4071C47.9965 29.1832 47.9025 28.9638 47.7969 28.7501C47.6868 28.537 47.5724 28.3328 47.4535 28.133C46.9679 27.356 46.3527 26.6696 45.635 26.1041C45.1454 25.753 44.7639 25.2699 44.5342 24.7101C44.4578 24.5006 44.4485 24.2722 44.5078 24.0572C44.5671 23.8421 44.6918 23.6512 44.8644 23.5115C45.0541 23.3302 45.2711 23.1804 45.5073 23.0676C45.7744 22.9331 46.0548 22.8275 46.3439 22.7523Z"
            fill="#F1F1F1"
          />
          <path
            d="M41.2406 31.3335C41.8433 31.8964 42.2456 32.6437 42.3854 33.46C42.4294 33.7764 42.4559 34.0951 42.4646 34.4145C42.4822 34.7383 42.4822 35.0629 42.4646 35.3867C42.4382 35.7108 42.3986 36.0393 42.3413 36.3678C42.2824 36.7006 42.2044 37.0297 42.108 37.3534C41.6907 38.7515 40.9686 40.0378 39.9945 41.1181C38.8779 42.3497 37.5174 43.3313 36.0008 43.9993C34.2804 44.7602 32.424 45.159 30.5453 45.1713C29.3825 45.1743 28.2511 44.7904 27.3267 44.0792C26.9307 43.7979 26.599 43.4345 26.3538 43.0134C26.1085 42.5922 25.9553 42.1231 25.9044 41.6375C25.892 41.2477 25.9834 40.8617 26.1693 40.5197C26.3552 40.1776 26.6286 39.8922 26.9612 39.693C27.3009 39.4807 27.675 39.3305 28.0664 39.2491C28.4995 39.1511 28.9447 39.1182 29.3873 39.1514C30.5009 39.2269 31.6186 39.0883 32.6809 38.743C33.1819 38.5798 33.6668 38.3702 34.1295 38.117C34.3585 37.9838 34.5698 37.8462 34.7856 37.7041C34.9931 37.5674 35.1931 37.4192 35.3844 37.2602C35.7588 36.9448 36.1024 36.594 36.4103 36.2125C36.56 36.026 36.7009 35.8262 36.8506 35.6309C37.0003 35.4356 37.1016 35.2402 37.2117 35.0271C37.6368 34.2149 37.9198 33.3348 38.0483 32.4256C38.0926 32.0891 38.1784 31.7595 38.3037 31.4445C38.3565 31.3116 38.4183 31.1826 38.4886 31.0583C38.5194 31.005 38.5546 30.9517 38.5899 30.9029L38.6999 30.7608C38.8439 30.5928 39.0357 30.4737 39.2492 30.4196C39.4628 30.3656 39.6877 30.3793 39.8932 30.4589C40.0131 30.4939 40.1295 30.54 40.241 30.5965C40.363 30.6546 40.4807 30.7214 40.5933 30.7963C40.826 30.9536 41.0428 31.1335 41.2406 31.3335Z"
            fill="white"
          />
          <path
            d="M31.3298 31.1691C31.1432 31.9755 30.7012 32.6987 30.0705 33.229C29.0377 34.0335 27.8477 34.6085 26.5788 34.9161C25.1693 35.2462 23.7048 35.2583 22.2901 34.9516C20.671 34.5956 19.1449 33.8981 17.8122 32.905C16.2994 31.7781 15.0304 30.3521 14.0827 28.7141C13.4966 27.7012 13.2626 26.52 13.4178 25.3579C13.4178 25.2247 13.4574 25.0915 13.4839 24.9627C13.5103 24.834 13.5543 24.7053 13.5939 24.581C13.6727 24.345 13.7714 24.1163 13.889 23.8973C14.1092 23.498 14.4219 23.1583 14.8004 22.9073C15.1293 22.7012 15.5069 22.5876 15.894 22.5783C16.2811 22.5689 16.6637 22.6641 17.002 22.854C17.3576 23.0366 17.677 23.2833 17.9442 23.5821C18.0932 23.7374 18.2287 23.9052 18.3493 24.0837C18.4715 24.2727 18.5832 24.4684 18.684 24.6698C19.1739 25.6768 19.8493 26.5808 20.6742 27.3334C21.4455 28.0358 22.342 28.5842 23.3161 28.9494C23.7723 29.1279 24.244 29.2631 24.7251 29.3534C25.1908 29.4292 25.6627 29.4589 26.1341 29.4422C26.5918 29.4253 27.0471 29.3673 27.4946 29.269C27.9349 29.17 28.3663 29.0349 28.7847 28.8651C29.097 28.7362 29.4238 28.6467 29.7579 28.5987C29.9037 28.5783 30.0509 28.5694 30.1982 28.572C30.3195 28.5734 30.4405 28.5868 30.5592 28.612C30.7788 28.6507 30.9811 28.7567 31.1387 28.9156C31.2963 29.0745 31.4015 29.2785 31.4399 29.4999C31.5355 30.0572 31.4978 30.6295 31.3298 31.1691Z"
            fill="#F1F1F1"
          />
          <path
            d="M26.517 22.4193C25.7318 22.6657 24.8878 22.6422 24.1173 22.3527C23.8267 22.2328 23.5405 22.0952 23.2366 21.9442C22.9538 21.7915 22.6789 21.624 22.4133 21.4426C21.8631 21.0672 21.3539 20.6342 20.8942 20.1507C19.906 19.0857 19.1633 17.8139 18.719 16.426C18.2155 14.8314 18.0505 13.1479 18.2347 11.4848C18.4538 9.61057 19.0421 7.79933 19.9651 6.15749C20.5453 5.14643 21.4375 4.35442 22.5057 3.90223C22.751 3.80305 23.0044 3.72582 23.2631 3.67139C23.504 3.61372 23.7507 3.58392 23.9984 3.5826C24.4563 3.56989 24.9102 3.67209 25.3193 3.88004C25.6621 4.06161 25.9499 4.33322 26.1522 4.66613C26.3545 4.99903 26.4638 5.38087 26.4686 5.77125C26.4896 6.62371 26.2363 7.4601 25.7464 8.15525C25.1266 9.08888 24.6887 10.133 24.4563 11.2318C24.2366 12.2536 24.2112 13.3081 24.3814 14.3394C24.4255 14.588 24.4871 14.8322 24.5488 15.0675C24.5796 15.1874 24.6148 15.3028 24.6501 15.4182C24.6853 15.5336 24.7293 15.6491 24.7733 15.7601C24.8614 15.9865 24.9539 16.204 25.0595 16.4171C25.1652 16.6302 25.2841 16.8389 25.403 17.0342C25.8872 17.8122 26.5026 18.4988 27.2215 19.063C27.7115 19.4155 28.093 19.9002 28.3223 20.4614C28.3982 20.6714 28.4067 20.9001 28.3467 21.1152C28.2866 21.3303 28.161 21.5209 27.9876 21.6601C27.7976 21.839 27.5825 21.9885 27.3492 22.1041C27.0837 22.2386 26.8047 22.3443 26.517 22.4193Z"
            fill="white"
          />
          <path
            d="M31.6152 13.8423C31.015 13.2773 30.6132 12.531 30.4704 11.7158C30.4263 11.3961 30.4043 11.0854 30.3911 10.7613C30.3779 10.4372 30.3911 10.1087 30.3911 9.78458C30.3911 9.4605 30.4572 9.13644 30.5144 8.80348C30.5729 8.47207 30.6508 8.14445 30.7478 7.82234C31.1659 6.42331 31.8879 5.13577 32.8613 4.05324C33.9753 2.8207 35.3346 1.83893 36.8505 1.17203C38.5725 0.411122 40.4303 0.0123148 42.3104 0C43.4712 0.00158564 44.5997 0.38504 45.5247 1.09212C45.9212 1.37283 46.2534 1.73605 46.4987 2.15728C46.7441 2.57851 46.8969 3.04794 46.9469 3.53383C46.9606 3.92392 46.8702 4.31057 46.6851 4.6534C46.5 4.99622 46.227 5.28264 45.8946 5.48273C45.5523 5.6898 45.1791 5.83972 44.7894 5.92668C44.3559 6.02262 43.9109 6.05404 43.4684 6.01992C42.3563 5.94636 41.2404 6.08492 40.1793 6.42834C39.6763 6.59193 39.1899 6.80302 38.7263 7.05877C38.5017 7.18751 38.2859 7.32513 38.0746 7.46719C37.867 7.60393 37.6671 7.75214 37.4758 7.91114C37.1002 8.22528 36.7566 8.57623 36.4498 8.95885C36.3001 9.1453 36.1592 9.34508 36.0095 9.54042C35.8782 9.73635 35.7577 9.93939 35.6485 10.1486C35.2206 10.9597 34.9374 11.8402 34.8119 12.7501C34.7664 13.0864 34.6807 13.4159 34.5565 13.7313C34.5046 13.8631 34.4427 13.9907 34.3715 14.1131C34.3399 14.1673 34.3046 14.2192 34.2659 14.2685C34.2316 14.3177 34.1949 14.3651 34.1558 14.4105C34.0131 14.5789 33.8223 14.6987 33.6095 14.7535C33.3967 14.8084 33.1723 14.7956 32.9669 14.7169C32.847 14.6803 32.7305 14.6327 32.6191 14.5748C32.4981 14.5165 32.3805 14.4513 32.2669 14.3794C32.0346 14.2198 31.8166 14.04 31.6152 13.8423Z"
            fill="#F1F1F1"
          />
          <path
            d="M41.5268 14.0064C41.7121 13.1995 42.1545 12.476 42.7861 11.9465C43.8248 11.1393 45.0229 10.5656 46.2998 10.264C47.7087 9.92997 49.1737 9.91631 50.5885 10.224C52.2085 10.5767 53.7361 11.2712 55.0708 12.2617C56.5826 13.3914 57.8514 14.8186 58.8003 16.457C59.3864 17.4683 59.6205 18.6481 59.4652 19.8088C59.4489 19.9432 59.4253 20.0766 59.3947 20.2084C59.3639 20.3371 59.3287 20.4659 59.289 20.5857C59.2099 20.8237 59.1097 21.054 58.9896 21.2738C58.7711 21.6717 58.4598 22.01 58.0826 22.2594C57.7541 22.4662 57.3767 22.5805 56.9896 22.5907C56.6025 22.6008 56.2197 22.5064 55.881 22.3171C55.5262 22.1314 55.2071 21.8834 54.9387 21.5846C54.7908 21.4269 54.6554 21.2576 54.5337 21.0785C54.4101 20.8896 54.2969 20.694 54.1946 20.4925C53.7066 19.4854 53.0326 18.5814 52.2088 17.8288C51.4385 17.1262 50.5417 16.5791 49.5669 16.2173C48.6619 15.8869 47.702 15.7361 46.7401 15.7733C46.2824 15.7902 45.8271 15.8482 45.3795 15.9465C44.9394 16.044 44.508 16.1777 44.0894 16.346C43.7757 16.475 43.4474 16.5644 43.1119 16.6124C42.966 16.6322 42.8189 16.6426 42.6716 16.6435C42.549 16.6397 42.4268 16.6263 42.3062 16.6035C42.0861 16.5661 41.8831 16.4605 41.7252 16.3014C41.5674 16.1422 41.4627 15.9375 41.4255 15.7156C41.3205 15.1461 41.3553 14.5593 41.5268 14.0064Z"
            fill="white"
          />
        </svg>
      </div>
      <ul className="navbar">
        <li className="navbar__item navbar__item-active">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="navbar__href"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 17L20 10L29 17V28C29 28.5304 28.7893 29.0391 28.4142 29.4142C28.0391 29.7893 27.5304 30 27 30H13C12.4696 30 11.9609 29.7893 11.5858 29.4142C11.2107 29.0391 11 28.5304 11 28V17Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17 30V20H23V30"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </li>
        <li className="navbar__item ">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="navbar__href"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 29C25.5228 29 30 24.5228 30 19C30 13.4772 25.5228 9 20 9C14.4772 9 10 13.4772 10 19C10 24.5228 14.4772 29 20 29Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 19H30"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 9C22.5013 11.7384 23.9228 15.292 24 19C23.9228 22.708 22.5013 26.2616 20 29C17.4987 26.2616 16.0772 22.708 16 19C16.0772 15.292 17.4987 11.7384 20 9V9Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </li>
        <li className="navbar__item">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="navbar__href"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29 16V29H11V16"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M31 11H9V16H31V11Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 20H22"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </li>
        <li className="navbar__item">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="navbar__href"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.2104 23.8901C28.5742 25.3946 27.5792 26.7203 26.3123 27.7514C25.0454 28.7825 23.5452 29.4875 21.9428 29.8049C20.3405 30.1222 18.6848 30.0422 17.1205 29.5719C15.5563 29.1015 14.131 28.2551 12.9694 27.1067C11.8078 25.9583 10.9452 24.5428 10.457 22.984C9.96886 21.4252 9.86996 19.7706 10.169 18.1647C10.468 16.5589 11.1559 15.0507 12.1724 13.7721C13.189 12.4935 14.5033 11.4834 16.0004 10.8301"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M30.0005 20C30.0005 18.6868 29.7418 17.3864 29.2393 16.1732C28.7367 14.9599 28.0001 13.8575 27.0716 12.9289C26.143 12.0003 25.0406 11.2638 23.8273 10.7612C22.6141 10.2587 21.3137 10 20.0005 10V20H30.0005Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </li>
        <li className="navbar__item">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="navbar__href"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 9V31"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25 13H17.5C16.5717 13 15.6815 13.3687 15.0251 14.0251C14.3687 14.6815 14 15.5717 14 16.5C14 17.4283 14.3687 18.3185 15.0251 18.9749C15.6815 19.6313 16.5717 20 17.5 20H22.5C23.4283 20 24.3185 20.3687 24.9749 21.0251C25.6313 21.6815 26 22.5717 26 23.5C26 24.4283 25.6313 25.3185 24.9749 25.9749C24.3185 26.6313 23.4283 27 22.5 27H14"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </li>
        <li className="navbar__item ">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="navbar__href"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 16C24.9706 16 29 14.6569 29 13C29 11.3431 24.9706 10 20 10C15.0294 10 11 11.3431 11 13C11 14.6569 15.0294 16 20 16Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29 20C29 21.66 25 23 20 23C15 23 11 21.66 11 20"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11 13V27C11 28.66 15 30 20 30C25 30 29 28.66 29 27V13"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </li>
        <li className="navbar__item">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="navbar__href"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 19L29 10L20 29L18 21L10 19Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
