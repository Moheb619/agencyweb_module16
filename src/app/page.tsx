export default async function Home() {
  const res = await fetch("https://agency.teamrabbil.com/api/BrandList");
  const data = await res.json();

  const res2 = await fetch("https://agency.teamrabbil.com/api/HeroList");
  const data2 = await res2.json();
  console.log(data2);

  const res3 = await fetch("https://agency.teamrabbil.com/api/WorkList");
  const data3 = await res3.json();
  console.log(data3);

  const res4 = await fetch("https://agency.teamrabbil.com/api/FeaturedProject");
  const data4 = await res4.json();
  console.log(data4);

  const res5 = await fetch("https://agency.teamrabbil.com/api/StatList");
  const data5 = await res5.json();
  console.log(data5);

  return (
    <div className="">
      <section className="bg-[#D7F5DC] px-20 min-h-screen md:flex py-10 justify-between items-center">
        <div className="space-y-10">
          <h1 className="text-5xl font-bold break-words w-[500px]">{data2.title}</h1>
          <p className="text-2xl break-words w-[500px]">{data2.description}</p>
          <button className="bg-green-500 text-white px-6 py-4 rounded-lg">Get Started</button>
        </div>
        <div className="md:block hidden rounded-md">
          <div className="flex p-2">
            <img className="p-2 w-[20rem] h-[20rem]" alt="" src={data2.image1} />
            <img className="p-2 w-[28rem]  h-[20rem]" alt="" src={data2.image2} />
          </div>
          <div className="flex p-2">
            <img className="p-2 w-[20rem]  h-[20rem]" alt="" src={data2.image3} />
            <img className="p-2 w-[28rem]  h-[20rem]" alt="" src={data2.image4} />
          </div>
        </div>
      </section>
      <div className="bg-[#F8FFF9] h-[120px] flex justify-evenly px-10 items-center">
        {/* <img src="Our Partners.jpg" alt="" /> */}
        {data.map((item: any) => (
          <img className="p-2 w-[10rem] h-[3.5rem]" alt="" src={item.image} />
        ))}
      </div>
      <div className="px-20 py-20 space-y-4">
        <h1 className="font-bold text-2xl text-green-500">WORK LIST</h1>
        <p className="text-4xl font-bold">We provide the Perfect Solution to your business growth</p>

        {/* WorkList */}
        <div className="md:grid grid-cols-3 md:ml-[10rem] place text-center mx-auto">
          <div className="flex flex-col w-[200px] space-y-4 items-center pt-10">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.0027 8.64207C30.7556 8.64206 32.3355 7.58769 33.005 5.97125C33.6744 4.35481 33.3012 2.49513 32.0596 1.26051C30.818 0.0258826 28.953 -0.340165 27.3352 0.333273C25.7175 1.00671 24.6662 2.5868 24.6722 4.33579C24.6803 6.71646 26.6167 8.64208 29.0027 8.64207ZM29.0027 2.46925C30.0358 2.46925 30.8734 3.30493 30.8734 4.33579C30.8734 5.36666 30.0358 6.20234 29.0027 6.20234C27.9696 6.20234 27.132 5.36666 27.132 4.33579C27.132 3.30493 27.9696 2.46925 29.0027 2.46925ZM2.45985 23.3246C2.45985 28.204 5.15538 30.8789 10.0309 30.8789C10.7109 30.8868 11.2602 31.435 11.2682 32.1135C11.2601 32.7896 10.7085 33.3334 10.0309 33.3333C3.84444 33.3333 0 29.4974 0 23.3246V11.317C0 5.12944 3.84444 1.29348 10.0309 1.29348H20.8719C21.5495 1.30153 22.0945 1.85191 22.0945 2.52804C22.0945 2.85413 21.9637 3.16666 21.7312 3.39585C21.4988 3.62505 21.184 3.75184 20.8572 3.74791H10.0309C5.15538 3.74791 2.45985 6.43749 2.45985 11.317V23.3246ZM19.7819 20.1206C19.5756 20.3747 19.2813 20.5425 18.9571 20.5909C18.6344 20.6236 18.3117 20.5286 18.0586 20.3263L13.5366 16.7843L9.47117 22.0606C9.27732 22.3238 8.9858 22.4984 8.66188 22.5453C8.33796 22.5923 8.0087 22.5077 7.7478 22.3104C7.21536 21.8939 7.11694 21.1279 7.52686 20.5909L12.3435 14.3299C12.5444 14.0703 12.8406 13.9012 13.1667 13.8598C13.4928 13.8184 13.8219 13.9083 14.0816 14.1094L18.6036 17.6514L22.5806 12.5809C23.0171 12.1668 23.6909 12.1316 24.1684 12.4981C24.6459 12.8645 24.7846 13.5234 24.4954 14.0506L19.7819 20.1206ZM30.9323 11.317C30.2571 11.317 29.7097 11.8631 29.7097 12.5368V23.3246C29.6655 28.204 26.97 30.8789 22.0945 30.8789H17.1748C16.4948 30.8868 15.9455 31.4349 15.9375 32.1135C15.9456 32.7896 16.4972 33.3334 17.1748 33.3333H22.0945C28.281 33.3333 32.1401 29.4974 32.1401 23.3246V12.5368C32.1402 11.8688 31.6017 11.325 30.9323 11.317Z"
                fill="#130F26"
              />
            </svg>

            <p className="text-xl font-bold">{data3[0].title}</p>
            <p className="text-lg text-center">{data3[0].des}</p>
            <p>Learn More {"->"}</p>
          </div>
          <div className="flex flex-col w-[200px] space-y-4 items-center pt-10">
            <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.8677 0.504506C28.558 1.34115 30.7951 3.26292 32.0589 5.82304C33.5367 8.92596 33.7378 12.5014 32.6178 15.756C31.5868 18.7521 29.8966 21.4682 27.6765 23.6963C26.2209 25.1924 24.6524 26.57 22.9853 27.8163L22.8971 27.8912C22.3433 28.2641 21.5985 28.1176 21.2206 27.5616C21.0285 27.2931 20.9514 26.9567 21.0068 26.6293C21.0622 26.3018 21.2455 26.0112 21.5147 25.8237C23.079 24.6451 24.5538 23.348 25.9265 21.9434C27.9036 19.9979 29.4133 17.6139 30.3383 14.9769C31.228 12.3493 31.048 9.4681 29.8383 6.97664C28.8649 5.01667 27.1498 3.54525 25.0883 2.90159C22.4589 2.06396 19.5942 2.57175 17.3971 4.26494C16.9603 4.59457 16.3633 4.59457 15.9265 4.26494C13.7303 2.56939 10.8645 2.0614 8.23525 2.90159C6.15994 3.53103 4.42772 4.99801 3.4411 6.96166C2.25876 9.45128 2.08962 12.3159 2.97051 14.932C3.89944 17.5626 5.40881 19.9409 7.3823 21.8835C10.2983 24.732 13.5139 27.2442 16.9706 29.3744C17.4102 29.6851 17.6036 30.2488 17.4495 30.7708C17.2955 31.2928 16.829 31.6545 16.2941 31.6666C16.053 31.6681 15.8171 31.5949 15.6176 31.4569C12.0168 29.2382 8.66795 26.6205 5.63229 23.6514C3.39988 21.4306 1.70347 18.7126 0.676381 15.711C-0.404982 12.4609 -0.183005 8.90729 1.29403 5.82304C2.55783 3.26292 4.79492 1.34115 7.48525 0.504506C10.5784 -0.468824 13.9344 -0.0202587 16.6765 1.73301C19.4185 -0.0202587 22.7745 -0.468824 25.8677 0.504506ZM24.6618 11.9806C24.6004 10.596 23.6953 9.39857 22.3971 8.9842C21.9144 8.6772 21.7001 8.07402 21.8779 7.52337C22.0557 6.97272 22.5798 6.61707 23.1471 6.66202C25.3399 7.36721 26.9007 9.34742 27.103 11.6809C27.1445 12.0072 27.0558 12.3368 26.8568 12.5958C26.6577 12.8549 26.365 13.0218 26.0442 13.0592C25.3707 13.1479 24.7532 12.6661 24.6618 11.9806Z"
                fill="#130F26"
              />
            </svg>

            <p className="text-xl font-bold">{data3[1].title}</p>
            <p className="text-lg text-center">{data3[1].des}</p>
            <p>Learn More {"->"}</p>
          </div>
          <div className="flex flex-col w-[200px] space-y-4 items-center pt-10">
            <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.8677 0.504506C28.558 1.34115 30.7951 3.26292 32.0589 5.82304C33.5367 8.92596 33.7378 12.5014 32.6178 15.756C31.5868 18.7521 29.8966 21.4682 27.6765 23.6963C26.2209 25.1924 24.6524 26.57 22.9853 27.8163L22.8971 27.8912C22.3433 28.2641 21.5985 28.1176 21.2206 27.5616C21.0285 27.2931 20.9514 26.9567 21.0068 26.6293C21.0622 26.3018 21.2455 26.0112 21.5147 25.8237C23.079 24.6451 24.5538 23.348 25.9265 21.9434C27.9036 19.9979 29.4133 17.6139 30.3383 14.9769C31.228 12.3493 31.048 9.4681 29.8383 6.97664C28.8649 5.01667 27.1498 3.54525 25.0883 2.90159C22.4589 2.06396 19.5942 2.57175 17.3971 4.26494C16.9603 4.59457 16.3633 4.59457 15.9265 4.26494C13.7303 2.56939 10.8645 2.0614 8.23525 2.90159C6.15994 3.53103 4.42772 4.99801 3.4411 6.96166C2.25876 9.45128 2.08962 12.3159 2.97051 14.932C3.89944 17.5626 5.40881 19.9409 7.3823 21.8835C10.2983 24.732 13.5139 27.2442 16.9706 29.3744C17.4102 29.6851 17.6036 30.2488 17.4495 30.7708C17.2955 31.2928 16.829 31.6545 16.2941 31.6666C16.053 31.6681 15.8171 31.5949 15.6176 31.4569C12.0168 29.2382 8.66795 26.6205 5.63229 23.6514C3.39988 21.4306 1.70347 18.7126 0.676381 15.711C-0.404982 12.4609 -0.183005 8.90729 1.29403 5.82304C2.55783 3.26292 4.79492 1.34115 7.48525 0.504506C10.5784 -0.468824 13.9344 -0.0202587 16.6765 1.73301C19.4185 -0.0202587 22.7745 -0.468824 25.8677 0.504506ZM24.6618 11.9806C24.6004 10.596 23.6953 9.39857 22.3971 8.9842C21.9144 8.6772 21.7001 8.07402 21.8779 7.52337C22.0557 6.97272 22.5798 6.61707 23.1471 6.66202C25.3399 7.36721 26.9007 9.34742 27.103 11.6809C27.1445 12.0072 27.0558 12.3368 26.8568 12.5958C26.6577 12.8549 26.365 13.0218 26.0442 13.0592C25.3707 13.1479 24.7532 12.6661 24.6618 11.9806Z"
                fill="#130F26"
              />
            </svg>

            <p className="text-xl font-bold">{data3[1].title}</p>
            <p className="text-lg text-center">{data3[1].des}</p>
            <p>Learn More {"->"}</p>
          </div>
        </div>
        <div className="pt-[6rem] flex flex-wrap justify-center gap-4">
          <div className="shadow-md p-10 rounded-xl flex flex-col justify-center items-center">
            <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24.25 6.91669C24.25 9.2639 22.3472 11.1667 20 11.1667V12.6667C23.1756 12.6667 25.75 10.0923 25.75 6.91669H24.25ZM20 11.1667C17.6528 11.1667 15.75 9.2639 15.75 6.91669H14.25C14.25 10.0923 16.8244 12.6667 20 12.6667V11.1667ZM15.75 6.91669C15.75 4.56948 17.6528 2.66669 20 2.66669V1.16669C16.8244 1.16669 14.25 3.74105 14.25 6.91669H15.75ZM20 2.66669C22.3472 2.66669 24.25 4.56948 24.25 6.91669H25.75C25.75 3.74105 23.1756 1.16669 20 1.16669V2.66669ZM15 17.6667H25V16.1667H15V17.6667ZM25 26.1667H15V27.6667H25V26.1667ZM15 26.1667C12.6528 26.1667 10.75 24.2639 10.75 21.9167H9.25C9.25 25.0923 11.8244 27.6667 15 27.6667V26.1667ZM29.25 21.9167C29.25 24.2639 27.3472 26.1667 25 26.1667V27.6667C28.1756 27.6667 30.75 25.0923 30.75 21.9167H29.25ZM25 17.6667C27.3472 17.6667 29.25 19.5695 29.25 21.9167H30.75C30.75 18.741 28.1756 16.1667 25 16.1667V17.6667ZM15 16.1667C11.8244 16.1667 9.25 18.741 9.25 21.9167H10.75C10.75 19.5695 12.6528 17.6667 15 17.6667V16.1667Z"
                fill="#2D264B"
              />
              <path
                d="M12.9202 11.3144C12.6573 10.8921 12.1641 10.6667 11.6667 10.6667C9.59559 10.6667 7.91666 8.98775 7.91666 6.91669C7.91666 4.84562 9.59559 3.16669 11.6667 3.16669C12.1641 3.16669 12.6573 2.94123 12.9202 2.51893C12.9319 2.50025 12.9435 2.48163 12.9553 2.46305C13.393 1.7722 13.1712 0.794021 12.3583 0.704526C12.1312 0.679522 11.9004 0.666687 11.6667 0.666687C8.21488 0.666687 5.41666 3.46491 5.41666 6.91669C5.41666 10.3685 8.21488 13.1667 11.6667 13.1667C11.9004 13.1667 12.1312 13.1539 12.3583 13.1288C13.1712 13.0394 13.393 12.0612 12.9553 11.3703C12.9436 11.3517 12.9319 11.3331 12.9202 11.3144Z"
                fill="#2D264B"
              />
              <path
                d="M7.84714 24.5281C7.65794 24.2125 7.32398 24 6.95597 24H6.66666C4.59559 24 2.91666 22.3211 2.91666 20.25C2.91666 18.179 4.59559 16.5 6.66666 16.5H6.95597C7.32398 16.5 7.65794 16.2876 7.84714 15.9719C8.30897 15.2014 7.8078 14 6.90948 14H6.66666C3.21488 14 0.416656 16.7982 0.416656 20.25C0.416656 23.7018 3.21488 26.5 6.66666 26.5H6.90948C7.8078 26.5 8.30897 25.2986 7.84714 24.5281Z"
                fill="#2D264B"
              />
              <path
                d="M27.0447 11.3703C26.607 12.0612 26.8287 13.0394 27.6417 13.1288C27.8688 13.1539 28.0995 13.1667 28.3333 13.1667C31.7851 13.1667 34.5833 10.3685 34.5833 6.91669C34.5833 3.46491 31.7851 0.666687 28.3333 0.666687C28.0995 0.666687 27.8688 0.679522 27.6417 0.704526C26.8287 0.794022 26.607 1.7722 27.0447 2.46305C27.0564 2.48162 27.0681 2.50025 27.0798 2.51893C27.3426 2.94123 27.8359 3.16669 28.3333 3.16669C30.4044 3.16669 32.0833 4.84562 32.0833 6.91669C32.0833 8.98775 30.4044 10.6667 28.3333 10.6667C27.8359 10.6667 27.3426 10.8921 27.0798 11.3144C27.0681 11.3331 27.0564 11.3517 27.0447 11.3703Z"
                fill="#2D264B"
              />
              <path
                d="M32.1528 24.5281C31.691 25.2987 32.1922 26.5 33.0905 26.5H33.3333C36.7851 26.5 39.5833 23.7018 39.5833 20.25C39.5833 16.7982 36.7851 14 33.3333 14H33.0905C32.1922 14 31.691 15.2014 32.1528 15.9719C32.342 16.2876 32.676 16.5 33.044 16.5H33.3333C35.4044 16.5 37.0833 18.179 37.0833 20.25C37.0833 22.3211 35.4044 24 33.3333 24H33.044C32.676 24 32.342 24.2125 32.1528 24.5281Z"
                fill="#2D264B"
              />
            </svg>

            <p className="text-xl font-bold">{data5.followers}</p>
            <p className="text-lg break-words w-[180px] text-center">Followers</p>
          </div>
          <div className="shadow-md p-10 rounded-xl flex flex-col justify-center items-center">
            <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 11.6667C1 9.3655 2.86548 7.50002 5.16667 7.50002C7.46785 7.50002 9.33333 9.3655 9.33333 11.6667V25C9.33333 27.3012 7.46785 29.1667 5.16667 29.1667C2.86548 29.1667 1 27.3012 1 25V11.6667Z"
                stroke="#2D264B"
                stroke-width="1.5"
              />
              <path
                d="M15.2924 2.81661L11.5748 8.85764C10.5767 10.4796 10.0776 11.2906 9.77584 12.1793C9.68379 12.4504 9.60578 12.726 9.5421 13.0051C9.33333 13.9202 9.33333 14.8724 9.33333 16.7768V22.5C9.33333 26.1819 12.3181 29.1667 16 29.1667H20.8497C24.0062 29.1667 26.8917 27.3833 28.3033 24.5601L30.2175 20.7317C32.1084 16.9498 29.3583 12.5 25.13 12.5H23.9804C21.0988 12.5 18.8952 9.93147 19.3333 7.08335L19.7384 4.45039C19.9636 2.9867 18.8311 1.66669 17.3502 1.66669C16.5111 1.66669 15.7321 2.10199 15.2924 2.81661Z"
                stroke="#2D264B"
                stroke-width="1.5"
              />
            </svg>

            <p className="text-xl font-bold">{data5.solved}</p>
            <p className="text-lg break-words w-[180px] text-center">Solved Problems</p>
          </div>
          <div className="shadow-md p-10 rounded-xl flex flex-col justify-center items-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.6667 23.3333C12.7778 25.4762 16 28.3333 20 28.3333C24 28.3333 27.2223 25.4762 28.3334 23.3333M36.6667 20C36.6667 29.2047 29.2048 36.6666 20 36.6666C10.7953 36.6666 3.33337 29.2047 3.33337 20C3.33337 10.7952 10.7953 3.33331 20 3.33331C29.2048 3.33331 36.6667 10.7952 36.6667 20Z"
                stroke="#2D264B"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M16.6667 13.3333C16.6667 14.2538 15.9205 15 15 15C14.0796 15 13.3334 14.2538 13.3334 13.3333C13.3334 12.4128 14.0796 11.6666 15 11.6666C15.9205 11.6666 16.6667 12.4128 16.6667 13.3333Z"
                fill="#2D264B"
              />
              <path
                d="M26.6667 13.3333C26.6667 14.2538 25.9205 15 25 15C24.0796 15 23.3334 14.2538 23.3334 13.3333C23.3334 12.4128 24.0796 11.6666 25 11.6666C25.9205 11.6666 26.6667 12.4128 26.6667 13.3333Z"
                fill="#2D264B"
              />
            </svg>

            <p className="text-xl font-bold">{data5.customers}</p>
            <p className="text-lg text-center w-[180px]">Happy Customers</p>
          </div>
          <div className="shadow-md p-10 rounded-xl flex flex-col justify-center items-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 26.6667H4.25H5ZM5.75 25C5.75 24.5858 5.41421 24.25 5 24.25C4.58579 24.25 4.25 24.5858 4.25 25H5.75ZM15 35.75C15.4142 35.75 15.75 35.4142 15.75 35C15.75 34.5858 15.4142 34.25 15 34.25V35.75ZM13.3333 35V34.25V35ZM15 5.75C15.4142 5.75 15.75 5.41421 15.75 5C15.75 4.58579 15.4142 4.25 15 4.25V5.75ZM4.25 15C4.25 15.4142 4.58579 15.75 5 15.75C5.41421 15.75 5.75 15.4142 5.75 15H4.25ZM35 13.3333H34.25H35ZM34.25 15C34.25 15.4142 34.5858 15.75 35 15.75C35.4142 15.75 35.75 15.4142 35.75 15H34.25ZM25 4.25C24.5858 4.25 24.25 4.58579 24.25 5C24.25 5.41421 24.5858 5.75 25 5.75V4.25ZM26.6667 5V4.25V5ZM26.6667 35V34.25V35ZM25 34.25C24.5858 34.25 24.25 34.5858 24.25 35C24.25 35.4142 24.5858 35.75 25 35.75V34.25ZM35.75 25C35.75 24.5858 35.4142 24.25 35 24.25C34.5858 24.25 34.25 24.5858 34.25 25H35.75ZM35 26.6667H35.75H35ZM5.75 26.6667L5.75 25H4.25L4.25 26.6667H5.75ZM15 34.25H13.3333V35.75H15V34.25ZM4.25 26.6667C4.25 31.6833 8.31675 35.75 13.3333 35.75V34.25C9.14518 34.25 5.75 30.8548 5.75 26.6667H4.25ZM13.3333 5.75H15V4.25H13.3333V5.75ZM5.75 15V13.3333H4.25V15H5.75ZM13.3333 4.25C8.31675 4.25 4.25 8.31675 4.25 13.3333H5.75C5.75 9.14517 9.14517 5.75 13.3333 5.75V4.25ZM34.25 13.3333V15H35.75V13.3333H34.25ZM25 5.75L26.6667 5.75V4.25L25 4.25V5.75ZM35.75 13.3333C35.75 8.31675 31.6833 4.25 26.6667 4.25V5.75C30.8548 5.75 34.25 9.14517 34.25 13.3333H35.75ZM26.6667 34.25H25V35.75H26.6667V34.25ZM34.25 25V26.6667H35.75V25H34.25ZM26.6667 35.75C31.6833 35.75 35.75 31.6833 35.75 26.6667H34.25C34.25 30.8548 30.8548 34.25 26.6667 34.25V35.75ZM13.3333 15.9167C12.5265 15.9167 11.9967 15.9151 11.6045 15.8623C11.2338 15.8125 11.1 15.7297 11.0185 15.6482L9.95783 16.7088C10.3645 17.1155 10.8676 17.2768 11.4046 17.349C11.9201 17.4183 12.5689 17.4167 13.3333 17.4167V15.9167ZM9.25 13.3333C9.25 14.0978 9.24841 14.7466 9.31771 15.2621C9.38991 15.7991 9.55117 16.3022 9.95783 16.7088L11.0185 15.6482C10.937 15.5667 10.8542 15.4329 10.8043 15.0622C10.7516 14.6699 10.75 14.1402 10.75 13.3333H9.25ZM15.9167 13.3333C15.9167 14.1402 15.9151 14.6699 15.8623 15.0622C15.8125 15.4329 15.7297 15.5667 15.6482 15.6482L16.7088 16.7088C17.1155 16.3022 17.2768 15.7991 17.349 15.2621C17.4183 14.7466 17.4167 14.0978 17.4167 13.3333H15.9167ZM13.3333 17.4167C14.0978 17.4167 14.7466 17.4183 15.2621 17.349C15.7991 17.2768 16.3022 17.1155 16.7088 16.7088L15.6482 15.6482C15.5667 15.7297 15.4329 15.8125 15.0622 15.8623C14.6699 15.9151 14.1402 15.9167 13.3333 15.9167V17.4167ZM13.3333 10.75C14.1402 10.75 14.6699 10.7516 15.0622 10.8043C15.4329 10.8542 15.5667 10.937 15.6482 11.0185L16.7088 9.95783C16.3022 9.55117 15.7991 9.38991 15.2621 9.31771C14.7466 9.24841 14.0978 9.25 13.3333 9.25V10.75ZM17.4167 13.3333C17.4167 12.5689 17.4183 11.9201 17.349 11.4046C17.2768 10.8676 17.1155 10.3645 16.7088 9.95783L15.6482 11.0185C15.7297 11.1 15.8125 11.2338 15.8623 11.6045C15.9151 11.9967 15.9167 12.5265 15.9167 13.3333H17.4167ZM13.3333 9.25C12.5689 9.25 11.9201 9.24841 11.4046 9.31771C10.8676 9.38991 10.3645 9.55117 9.95783 9.95783L11.0185 11.0185C11.1 10.937 11.2338 10.8542 11.6045 10.8043C11.9967 10.7516 12.5265 10.75 13.3333 10.75V9.25ZM10.75 13.3333C10.75 12.5265 10.7516 11.9967 10.8043 11.6045C10.8542 11.2338 10.937 11.1 11.0185 11.0185L9.95783 9.95783C9.55117 10.3645 9.38991 10.8676 9.31771 11.4046C9.24841 11.9201 9.25 12.5689 9.25 13.3333H10.75ZM13.3333 29.25C12.5265 29.25 11.9967 29.2484 11.6045 29.1957C11.2338 29.1458 11.1 29.063 11.0185 28.9815L9.95783 30.0422C10.3645 30.4488 10.8676 30.6101 11.4046 30.6823C11.9201 30.7516 12.5689 30.75 13.3333 30.75V29.25ZM9.25 26.6667C9.25 27.4311 9.24841 28.0799 9.31771 28.5954C9.38991 29.1324 9.55117 29.6355 9.95783 30.0422L11.0185 28.9815C10.937 28.9 10.8542 28.7662 10.8043 28.3955C10.7516 28.0033 10.75 27.4735 10.75 26.6667H9.25ZM15.9167 26.6667C15.9167 27.4735 15.9151 28.0033 15.8623 28.3955C15.8125 28.7662 15.7297 28.9 15.6482 28.9815L16.7088 30.0422C17.1155 29.6355 17.2768 29.1324 17.349 28.5954C17.4183 28.0799 17.4167 27.4311 17.4167 26.6667H15.9167ZM13.3333 30.75C14.0978 30.75 14.7466 30.7516 15.2621 30.6823C15.7991 30.6101 16.3022 30.4488 16.7088 30.0422L15.6482 28.9815C15.5667 29.063 15.4329 29.1458 15.0622 29.1957C14.6699 29.2484 14.1402 29.25 13.3333 29.25V30.75ZM13.3333 24.0833C14.1402 24.0833 14.6699 24.0849 15.0622 24.1377C15.4329 24.1875 15.5667 24.2703 15.6482 24.3518L16.7088 23.2912C16.3022 22.8845 15.7991 22.7232 15.2621 22.651C14.7466 22.5817 14.0978 22.5833 13.3333 22.5833V24.0833ZM17.4167 26.6667C17.4167 25.9022 17.4183 25.2534 17.349 24.7379C17.2768 24.2009 17.1155 23.6978 16.7088 23.2912L15.6482 24.3518C15.7297 24.4333 15.8125 24.5671 15.8623 24.9378C15.9151 25.3301 15.9167 25.8598 15.9167 26.6667H17.4167ZM13.3333 22.5833C12.5689 22.5833 11.9201 22.5817 11.4046 22.651C10.8676 22.7232 10.3645 22.8845 9.95783 23.2912L11.0185 24.3518C11.1 24.2703 11.2338 24.1875 11.6045 24.1377C11.9967 24.0849 12.5265 24.0833 13.3333 24.0833V22.5833ZM10.75 26.6667C10.75 25.8598 10.7516 25.3301 10.8043 24.9378C10.8542 24.5671 10.937 24.4333 11.0185 24.3518L9.95783 23.2912C9.55117 23.6978 9.38991 24.2009 9.31771 24.7379C9.24841 25.2534 9.25 25.9022 9.25 26.6667H10.75ZM26.6667 29.25C25.8598 29.25 25.3301 29.2484 24.9378 29.1957C24.5671 29.1458 24.4333 29.063 24.3518 28.9815L23.2912 30.0422C23.6978 30.4488 24.2009 30.6101 24.7379 30.6823C25.2534 30.7516 25.9022 30.75 26.6667 30.75V29.25ZM22.5833 26.6667C22.5833 27.4311 22.5817 28.0799 22.651 28.5954C22.7232 29.1324 22.8845 29.6355 23.2912 30.0422L24.3518 28.9815C24.2703 28.9 24.1875 28.7662 24.1377 28.3955C24.0849 28.0033 24.0833 27.4735 24.0833 26.6667H22.5833ZM29.25 26.6667C29.25 27.4735 29.2484 28.0033 29.1957 28.3955C29.1458 28.7662 29.063 28.9 28.9815 28.9815L30.0422 30.0422C30.4488 29.6355 30.6101 29.1324 30.6823 28.5954C30.7516 28.0799 30.75 27.4311 30.75 26.6667H29.25ZM26.6667 30.75C27.4311 30.75 28.0799 30.7516 28.5954 30.6823C29.1324 30.6101 29.6355 30.4488 30.0422 30.0422L28.9815 28.9815C28.9 29.063 28.7662 29.1458 28.3955 29.1957C28.0033 29.2484 27.4735 29.25 26.6667 29.25V30.75ZM26.6667 24.0833C27.4735 24.0833 28.0033 24.0849 28.3955 24.1377C28.7662 24.1875 28.9 24.2703 28.9815 24.3518L30.0422 23.2912C29.6355 22.8845 29.1324 22.7232 28.5954 22.651C28.0799 22.5817 27.4311 22.5833 26.6667 22.5833V24.0833ZM30.75 26.6667C30.75 25.9022 30.7516 25.2534 30.6823 24.7379C30.6101 24.2009 30.4488 23.6978 30.0422 23.2912L28.9815 24.3518C29.063 24.4333 29.1458 24.5671 29.1957 24.9378C29.2484 25.3301 29.25 25.8598 29.25 26.6667H30.75ZM26.6667 22.5833C25.9022 22.5833 25.2534 22.5817 24.7379 22.651C24.2009 22.7232 23.6978 22.8845 23.2912 23.2912L24.3518 24.3518C24.4333 24.2703 24.5671 24.1875 24.9378 24.1377C25.3301 24.0849 25.8598 24.0833 26.6667 24.0833V22.5833ZM24.0833 26.6667C24.0833 25.8598 24.0849 25.3301 24.1377 24.9378C24.1875 24.5671 24.2703 24.4333 24.3518 24.3518L23.2912 23.2912C22.8845 23.6978 22.7232 24.2009 22.651 24.7379C22.5817 25.2534 22.5833 25.9022 22.5833 26.6667H24.0833Z"
                fill="#2D264B"
              />
            </svg>

            <p className="text-xl font-bold">{data5.projects}</p>
            <p className="text-lg text-center w-[180px]">Projects</p>
          </div>
        </div>
      </div>
      <div className="px-20 py-20 space-y-6 min-h-[50rem] bg-[#D7F5DC]">
        <div className="space-y-6">
          <h1 className="font-bold text-2xl text-green-500">FEATURED PROJECT</h1>
          <p className="text-2xl font-bold">We provide the Perfect Solution to your business growth</p>
        </div>
        <div className="flex gap-6 flex-wrap justify-center">
          {data4.map((item: any) => (
            <div className="flex flex-col justify-center items-center">
              <img className="shadow-md rounded-xl w-[15rem] h-[15rem]" alt="" src={item.image} />
              <p className="text-xl break-words w-[200px]">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
