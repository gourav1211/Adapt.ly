import React from 'react';

const MainContent = () => {
    return (
        <div className="flex flex-col ml-5 md:flex-row w-6/12 max-md:ml-0 max-md:w-full drop-shadow-sm">
            <div className="flex flex-col grow px-5 py-5 mx-auto w-full bg-yellow-200 rounded-lg max-md:mt-2.5">
                <div className="flex gap-5 justify-between px-0.5 mr-3 w-full tracking-wide max-md:mr-2.5">
                    <h1 className="flex-auto text-lg font-semibold leading-7 text-neutral-900">
                        Artificial Intelligence
                    </h1>
                    <div className="flex gap-2.5 justify-between px-1.5 py-2.5 text-xs leading-3 whitespace-nowrap rounded-md border border-solid border-[color:var(--Gray-02,#D3D2D2)] text-neutral-600">
                        <spam className="justify-center items-center">Today</spam>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/249bb469e0b9bcfea61a2143f7b7390dbb95f130d8d4f1ee83afaaa1cd88039d?apiKey=6153720106a04a3a88ff7425a6bd679e&"
                            className="self-start w-2.5 aspect-square"
                        />
                    </div>
                </div>
                <div className="flex gap-5 justify-between mt-5 text-xs tracking-wide leading-5 text-zinc-500">
                    <div className="flex gap-1 justify-between">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b48c4fce9c30d4377e89e7ca0ae382de3953a953e826b7b701ad02298b3b7b4a?apiKey=6153720106a04a3a88ff7425a6bd679e&"
                            className="self-start w-3.5 aspect-[0.93]"
                        />
                        <spam>Monday, 28 June 2024</spam>
                    </div>
                    <div className="flex gap-1 justify-between">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/58722358f6f3e2a4453c78986a8a9f89c46fcabb618a52a32a10f6f70fa2d849?apiKey=6153720106a04a3a88ff7425a6bd679e&"
                            className="self-start w-3.5 aspect-[0.93]"
                        />
                        <spam>Mr. Mark Jefferson</spam>
                    </div>
                </div>
                <div className="flex gap-2 justify-between mt-2">
                    <div className="flex flex-col flex-1 self-start tracking-wide">
                        <div className="flex  justify-between text-xs leading-5 text-zinc-500">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4721036e582a70d8918c5d5f28164a76b005b922ccff55ab96e4847b7da97bdf?apiKey=6153720106a04a3a88ff7425a6bd679e&"
                                className="self-start w-3 aspect-[0.93]"
                            />
                            <spam>02.00 -03.30 PM</spam>
                        </div>
                        <div className="mt-1 text-sm font-medium leading-5 text-neutral-900">
                            Students
                        </div>
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a742c6a0f1637fa196888663fd5b96ef537aaa3b73a68c53e86596c9721a52da?apiKey=6153720106a04a3a88ff7425a6bd679e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a742c6a0f1637fa196888663fd5b96ef537aaa3b73a68c53e86596c9721a52da?apiKey=6153720106a04a3a88ff7425a6bd679e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a742c6a0f1637fa196888663fd5b96ef537aaa3b73a68c53e86596c9721a52da?apiKey=6153720106a04a3a88ff7425a6bd679e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a742c6a0f1637fa196888663fd5b96ef537aaa3b73a68c53e86596c9721a52da?apiKey=6153720106a04a3a88ff7425a6bd679e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a742c6a0f1637fa196888663fd5b96ef537aaa3b73a68c53e86596c9721a52da?apiKey=6153720106a04a3a88ff7425a6bd679e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a742c6a0f1637fa196888663fd5b96ef537aaa3b73a68c53e86596c9721a52da?apiKey=6153720106a04a3a88ff7425a6bd679e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a742c6a0f1637fa196888663fd5b96ef537aaa3b73a68c53e86596c9721a52da?apiKey=6153720106a04a3a88ff7425a6bd679e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a742c6a0f1637fa196888663fd5b96ef537aaa3b73a68c53e86596c9721a52da?apiKey=6153720106a04a3a88ff7425a6bd679e&"
                            className="self-center mt-4 aspect-[3.85] w-[139px]"
                        />
                    </div>
                    <div className="flex flex-col flex-1 text-xs">
                        <div className="flex gap-1.5 self-end mr-8 tracking-wide whitespace-nowrap leading-[191%] text-zinc-500 max-md:mr-2.5">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd7cbf04b547ca22f4f2e237aa185aff45437f2c4cbd81fa980e434f2b2880da?apiKey=6153720106a04a3a88ff7425a6bd679e&"
                                className="w-4 aspect-[1.06]"
                            />
                            <p className="grow my-auto">Zoom</p>
                        </div>
                        <p className="mt-16 tracking-wide leading-5 text-neutral-900 max-md:mt-10">
                            + 25 people joined the class
                        </p>
                    </div>
                </div>
                <button className="justify-center items-center px-16 py-2 mt-7 text-sm font-semibold tracking-wide leading-5 text-white whitespace-nowrap bg-sky-500 rounded-xl max-md:px-5">
                    Join the class
                </button>
            </div>
            
            <div className="flex flex-col grow px-5 py-5 mx-auto w-full bg-yellow-200 rounded-lg max-md:mt-2.5 ml-10">
                <div className="flex gap-5 justify-between px-0.5 mr-3 w-full tracking-wide max-md:mr-2.5">
                    <h1 className="flex-auto text-lg font-semibold leading-7 text-neutral-900">
                        Artificial Intelligence
                    </h1>
                    <div className="flex gap-2.5 justify-between px-1.5 py-2.5 text-xs leading-3 whitespace-nowrap rounded-md border border-solid border-[color:var(--Gray-02,#D3D2D2)] text-neutral-600">
                        <spam>Today</spam>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/249bb469e0b9bcfea61a2143f7b7390dbb95f130d8d4f1ee83afaaa1cd88039d?apiKey=6153720106a04a3a88ff7425a6bd679e&"
                            className="self-start w-2.5 aspect-square"
                        />
                    </div>
                </div>
                <div className="flex gap-5 justify-between mt-5 text-xs tracking-wide leading-5 text-zinc-500">
                    <div className="flex gap-1 justify-between">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b48c4fce9c30d4377e89e7ca0ae382de3953a953e826b7b701ad02298b3b7b4a?apiKey=6153720106a04a3a88ff7425a6bd679e&"
                            className="self-start w-3.5 aspect-[0.93]"
                        />
                        <spam>Monday, 28 June 2024</spam>
                    </div>
                    <div className="flex gap-1 justify-between">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/58722358f6f3e2a4453c78986a8a9f89c46fcabb618a52a32a10f6f70fa2d849?apiKey=6153720106a04a3a88ff7425a6bd679e&"
                            className="self-start w-3.5 aspect-[0.93]"
                        />
                        <spam>Mr. Mark Jefferson</spam>
                    </div>
                </div>
                <div className="flex gap-2 justify-between mt-2">
                    <div className="flex flex-col flex-1 self-start tracking-wide">
                        <div className="flex  justify-between text-xs leading-5 text-zinc-500">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4721036e582a70d8918c5d5f28164a76b005b922ccff55ab96e4847b7da97bdf?apiKey=6153720106a04a3a88ff7425a6bd679e&"
                                className="self-start w-3 aspect-[0.93]"
                            />
                            <spam>02.00 -03.30 PM</spam>
                        </div>
                        <div className="mt-1 text-sm font-medium leading-5 text-neutral-900">
                            Students
                        </div>
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a742c6a0f1637fa196888663fd5b96ef537aaa3b73a68c53e86596c9721a52da?apiKey=6153720106a04a3a88ff7425a6bd679e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a742c6a0f1637fa196888663fd5b96ef537aaa3b73a68c53e86596c9721a52da?apiKey=6153720106a04a3a88ff7425a6bd679e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a742c6a0f1637fa196888663fd5b96ef537aaa3b73a68c53e86596c9721a52da?apiKey=6153720106a04a3a88ff7425a6bd679e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a742c6a0f1637fa196888663fd5b96ef537aaa3b73a68c53e86596c9721a52da?apiKey=6153720106a04a3a88ff7425a6bd679e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a742c6a0f1637fa196888663fd5b96ef537aaa3b73a68c53e86596c9721a52da?apiKey=6153720106a04a3a88ff7425a6bd679e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a742c6a0f1637fa196888663fd5b96ef537aaa3b73a68c53e86596c9721a52da?apiKey=6153720106a04a3a88ff7425a6bd679e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a742c6a0f1637fa196888663fd5b96ef537aaa3b73a68c53e86596c9721a52da?apiKey=6153720106a04a3a88ff7425a6bd679e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a742c6a0f1637fa196888663fd5b96ef537aaa3b73a68c53e86596c9721a52da?apiKey=6153720106a04a3a88ff7425a6bd679e&"
                            className="self-center mt-4 aspect-[3.85] w-[139px]"
                        />
                    </div>
                    <div className="flex flex-col flex-1 text-xs">
                        <div className="flex gap-1.5 self-end mr-8 tracking-wide whitespace-nowrap leading-[191%] text-zinc-500 max-md:mr-2.5">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd7cbf04b547ca22f4f2e237aa185aff45437f2c4cbd81fa980e434f2b2880da?apiKey=6153720106a04a3a88ff7425a6bd679e&"
                                className="w-4 aspect-[1.06]"
                            />
                            <p className="grow my-auto">Zoom</p>
                        </div>
                        <p className="mt-16 tracking-wide leading-5 text-neutral-900 max-mt-10">
                            + 25 people joined the class
                        </p>
                    </div>
                </div>
                <button className="justify-center items-center px-16 py-2 mt-7 text-sm font-semibold tracking-wide leading-5 text-white whitespace-nowrap bg-sky-500 rounded-xl max-md:px-5">
                    Join the class
                </button>
            </div>
            <div className="flex flex-col grow px-5 py-5 mx-auto w-full bg-yellow-200 rounded-lg max-md:mt-2.5 ml-10">
                <div className="flex gap-5 justify-between px-0.5 mr-3 w-full tracking-wide max-md:mr-2.5">
                    <h1 className="flex-auto text-lg font-semibold leading-7 text-neutral-900">
                        Artificial Intelligence
                    </h1>
                    <div className="flex gap-2.5 justify-between px-1.5 py-2.5 text-xs leading-3 whitespace-nowrap rounded-md border border-solid border-[color:var(--Gray-02,#D3D2D2)] text-neutral-600">
                        <spam>Today</spam>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/249bb469e0b9bcfea61a2143f7b7390dbb95f130d8d4f1ee83afaaa1cd88039d?apiKey=6153720106a04a3a88ff7425a6bd679e&"
                            className="self-start w-2.5 aspect-square"
                        />
                    </div>
                </div>
                <div className="flex gap-5 justify-between mt-5 text-xs tracking-wide leading-5 text-zinc-500">
                    <div className="flex gap-1 justify-between">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b48c4fce9c30d4377e89e7ca0ae382de3953a953e826b7b701ad02298b3b7b4a?apiKey=6153720106a04a3a88ff7425a6bd679e&"
                            className="self-start w-3.5 aspect-[0.93]"
                        />
                        <spam>Monday, 28 June 2024</spam>
                    </div>
                    <div className="flex gap-1 justify-between">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/58722358f6f3e2a4453c78986a8a9f89c46fcabb618a52a32a10f6f70fa2d849?apiKey=6153720106a04a3a88ff7425a6bd679e&"
                            className="self-start w-3.5 aspect-[0.93]"
                        />
                        <spam>Mr. Mark Jefferson</spam>
                    </div>
                </div>
                <div className="flex gap-2 justify-between mt-2">
                    <div className="flex flex-col flex-1 self-start tracking-wide">
                        <div className="flex  justify-between text-xs leading-5 text-zinc-500">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4721036e582a70d8918c5d5f28164a76b005b922ccff55ab96e4847b7da97bdf?apiKey=6153720106a04a3a88ff7425a6bd679e&"
                                className="self-start w-3 aspect-[0.93]"
                            />
                            <spam>02.00 -03.30 PM</spam>
                        </div>
                        <div className="mt-1 text-sm font-medium leading-5 text-neutral-900">
                            Students
                        </div>
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a742c6a0f1637fa196888663fd5b96ef537aaa3b73a68c53e86596c9721a52da?apiKey=6153720106a04a3a88ff7425a6bd679e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a742c6a0f1637fa196888663fd5b96ef537aaa3b73a68c53e86596c9721a52da?apiKey=6153720106a04a3a88ff7425a6bd679e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a742c6a0f1637fa196888663fd5b96ef537aaa3b73a68c53e86596c9721a52da?apiKey=6153720106a04a3a88ff7425a6bd679e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a742c6a0f1637fa196888663fd5b96ef537aaa3b73a68c53e86596c9721a52da?apiKey=6153720106a04a3a88ff7425a6bd679e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a742c6a0f1637fa196888663fd5b96ef537aaa3b73a68c53e86596c9721a52da?apiKey=6153720106a04a3a88ff7425a6bd679e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a742c6a0f1637fa196888663fd5b96ef537aaa3b73a68c53e86596c9721a52da?apiKey=6153720106a04a3a88ff7425a6bd679e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a742c6a0f1637fa196888663fd5b96ef537aaa3b73a68c53e86596c9721a52da?apiKey=6153720106a04a3a88ff7425a6bd679e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a742c6a0f1637fa196888663fd5b96ef537aaa3b73a68c53e86596c9721a52da?apiKey=6153720106a04a3a88ff7425a6bd679e&"
                            className="self-center mt-4 aspect-[3.85] w-[139px]"
                        />
                    </div>
                    <div className="flex flex-col flex-1 text-xs">
                        <div className="flex gap-1.5 self-end mr-8 tracking-wide whitespace-nowrap leading-[191%] text-zinc-500 max-md:mr-2.5">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd7cbf04b547ca22f4f2e237aa185aff45437f2c4cbd81fa980e434f2b2880da?apiKey=6153720106a04a3a88ff7425a6bd679e&"
                                className="w-4 aspect-[1.06]"
                            />
                            <p className="grow my-auto">Zoom</p>
                        </div>
                        <p className="mt-16 tracking-wide leading-5 text-neutral-900 max-mt-10">
                            + 25 people joined the class
                        </p>
                    </div>
                </div>
                <button className="justify-center items-center px-16 py-2 mt-7 text-sm font-semibold tracking-wide leading-5 text-white whitespace-nowrap bg-sky-500 rounded-xl max-md:px-5">
                    Join the class
                </button>
            </div>
        </div>
        

  
        
    );
};

export default MainContent;

// 