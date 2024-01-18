'use client'

import { useEffect, useMemo, useState } from "react"
import { redirect, useRouter } from "next/navigation"
import dynamic from "next/dynamic"

import LayoutHostModal from "./LayoutHostModal"
import HostGuide from "./HostGuide"
import HostCategory, { categorySelected } from "./HostCategory"
import HostRoomType from "./HostRoomType"
import CountrySelect from "./CountrySelect"
import Counter from "./Counter"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import HostOffer, { hostOffer } from "./HostOffer"
import HostAmenities from "./HostAmenities"
import Safety from "./Safety"
import ImageUpload from "./ImageUpload"
import HostConfirm from "./HostConfirm"

import Calendar from "../../calendar/DateRange"
import { Range } from 'react-date-range';
import axios from "axios"
import toast from "react-hot-toast"
import { isAuthenticated } from "@/utils/Auth"

enum STEPS {
    INTRO = 0,
    CATEGORY = 1,
    TYPE = 2,
    LOCATION = 3,
    ABOUT = 4,
    SECOND_INTRO = 5,
    OFFER = 6,
    IMAGES = 7,
    SHORT_DESC = 8,
    DESCRIPTION = 9,
    THIRD_INTRO = 10,
    RESERVE_CONFIRM = 11,
    PRICE = 12,
    // CALENDER = 13,
};

// const initialDateRange = {
//     startDate: new Date(),
//     endDate: new Date(),
//     key: 'selection'
// };

//* MULTISTEP 
const HostingModal = () => {
    const [steps, setSteps] = useState(STEPS.INTRO); // First STEPS
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);
   // const [dateRange, setDateRange] = useState<Range>(initialDateRange);
    const router = useRouter();

    // const [max, setMax] = useState(0);

    // const handleKeyPress = (e: any) => {
    //     const count = e.target.value;
    //     setMax(count.length);
    // };


    //* <===================================== REACT_HOOK_FORM
    const {
        register,
        watch,
        handleSubmit,
        setValue,
        formState:
        { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            category: '',
            roomType: '',
            location: null,
            guestCount: 1,
            bedroomCount: 1,
            bedCount: 1,
            bathroomCount: 1,
            offer: '',
            imageSrc: '',
            amenities: '',
            safety: '',
            shortDesc: '',
            description: '',
            confirm: '',
            price: 100,
        }
    });


    const setCustomValues = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldValidate: true,
            shouldTouch: true
        })
    };

    const category = watch('category');
    const roomType = watch('roomType');
    const location = watch('location');
    const guestCount = watch('guestCount');
    const bedroomCount = watch('bedroomCount');
    const bedCount = watch('bedCount');
    const bathroomCount = watch('bathroomCount');
    const offer = watch('offer');
    const imageSrc = watch('imageSrc');
    const amenities = watch('amenities');
    const safety = watch('safety');
    const confirm = watch('confirm');

    //* =========================================================> 

    const Map = useMemo(() => dynamic(() => import('../HostModal/Map'), {
        ssr: false
    }), []);


    //* BUTTON 
    const onBack = () => {
        setSteps((value) => value - 1);
    };

    const onNext = () => {
        setTimeout(() => {
            setSteps((value) => value + 1);
            setIsLoading(false);
        }, 400)

        setIsLoading(true);
    };


    //* <=========== Next & Create (onSubmit) ==============> 
    const onSubmit: SubmitHandler<FieldValues> = async (value) => {
        if (steps !== STEPS.PRICE) {
            return onNext();
        };
        setIsLoading(true);
        console.log(value);

        try {
            const res = await axios.post('/api/listings', value);

            console.log(res.data);
            toast.success('Create listing success!');
            router.push('/');
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong!');
        } finally {
            setIsLoading(false);
        };
    };


    const secondaryAction = () => {
        if (steps === STEPS.INTRO) {
            setTimeout(() => {
                router.push('/hosting');
            }, 400);
        };
        setIsLoading2(true);

        setTimeout(() => {
            onBack();
            setIsLoading2(false);
        }, 400);
    };


    //? <====================== MAIN CONTENT ==========================>
    //* STEP 1 INTRO
    let bodyContent = (
        <HostGuide
            step="Step 1"
            title="Tell us about your place"
            head="Tell us about your place - ActiveBnb"
            desc="In this step, we'll ask you which type of property you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay."
            imgSrc="/House.png"
        />
    );

    //* STEP 2 CATEGORY
    if (steps === STEPS.CATEGORY) {
        bodyContent = (
            <div className="h-full overflow-y-scroll">
                <title>
                    Descripe your places = ActiveBnb
                </title>
                <h1 className="titleCategoryAnimate font-semibold text-4xl pb-2">
                    Which of these best describes your place?
                </h1>

                <form className="categoryAnimate grid gap-4 grid-cols-2 md:grid-cols-3 py-4">
                    {categorySelected.map((item) => (
                        <HostCategory
                            key={item.label}
                            label={item.label}
                            onClick={(category) => {
                                setCustomValues('category', category)
                            }}
                            isSelected={category}
                            icon={item.icon}
                        />
                    ))}
                </form>
            </div>
        )
    };
    // console.log(category);

    //* STEP 3 TYPE
    if (steps === STEPS.TYPE) {
        bodyContent = (
            <div>
                <title>
                    Type of place - ActiveBnb
                </title>
                <h1 className="titleTypeAnimate font-semibold text-3xl md:text-4xl pb-2">
                    What type of place will guests have?
                </h1>

                <HostRoomType
                    onClick={(roomType) => {
                        setCustomValues('roomType', roomType)
                    }}
                    isSelected={roomType}
                />
            </div>
        )
    };
    //console.log(roomType);


    //* STEP 4 LOCATION
    if (steps === STEPS.LOCATION) {
        bodyContent = (
            <div className="locationAnimate flex flex-col justify-center h-full">
                <title>
                    Your Location - ActiveBnb
                </title>
                <section>
                    <h1 className="font-semibold text-3xl md:text-4xl pb-2">
                        Where&apos;s your place located?
                    </h1>

                    <span className="text-gray-500 text-xl font-light">
                        Your address is only shared with guests after they’ve made a reservation.
                    </span>
                </section>

                <form className="py-8 relative flex justify-center">
                    <CountrySelect
                        value={location}
                        onChange={(value) => setCustomValues('location', value)}
                    />
                    {/* w-full must add */}
                    <div className="w-full z-0">
                        <Map
                            center={location?.latlng}
                        />
                    </div>
                </form>
            </div>
        );
    };
    // console.log(location);


    //* STEP 5 ABOUT  
    if (steps === STEPS.ABOUT) {
        bodyContent = (
            <div className="aboutAnimate">
                <title>
                    Share the total guests - AcitveBnb
                </title>
                <section>
                    <h1 className="font-semibold text-3xl md:text-4xl pb-2">
                        Share some basics about your place
                    </h1>
                    <span className="text-gray-500 text-xl font-light">
                        You&apos;ll add more details later, like bed types.
                    </span>
                </section>

                <form className="pt-8 flex flex-col gap-4">
                    <Counter
                        title="Guests"
                        value={guestCount}
                        onChange={(value) => setCustomValues('guestCount', value)}
                    />
                    <Counter
                        title="Bedrooms"
                        value={bedroomCount}
                        onChange={(value) => setCustomValues('bedroomCount', value)}
                    />
                    <Counter
                        title="Beds"
                        value={bedCount}
                        onChange={(value) => setCustomValues('bedCount', value)}
                    />
                    <Counter
                        title="Bathrooms"
                        value={bathroomCount}
                        onChange={(value) => setCustomValues('bathroomCount', value)}
                    />
                </form>
            </div>
        )
    };

    //* STEP 6 SECOND_INTRO
    if (steps === STEPS.SECOND_INTRO) {
        bodyContent = (
            <HostGuide
                step="Step 2"
                title="Make your place stand out"
                head="Make your place stand out - ActiveBnb"
                desc="In this step, you’ll add some of the amenities your place offers, plus 5 or more photos. Then, you’ll create a title and description."
                imgSrc="/Room.png"
            />
        )
    };

    //* STEP 7 OFFER
    if (steps === STEPS.OFFER) {
        bodyContent = (
            <div className="offerAnimate overflow-y-scroll h-full">
                <title>Choose your amenities - ActiveBnb</title>
                <h1 className="titleTypeAnimate font-semibold text-3xl md:text-4xl pb-2">
                    Tell guests what your place has to offer
                </h1>
                <span className="text-gray-500 text-xl font-light">
                    You can add more amenities after you publish your listing.
                </span>

                <form className="grid gap-2 grid-cols-2 md:grid-cols-3 py-4">
                    {hostOffer.map((item) => (
                        <HostOffer
                            key={item.label}
                            label={item.label}
                            onClick={(offer) => {
                                setCustomValues('offer', offer)
                            }}
                            isSelected={offer}
                            icon={item.icon}
                        />
                    ))}
                </form>

                <h1 className="font-semibold text-xl pt-8">
                    Do you have any standout amenities?
                </h1>

                <form className="grid gap-2 grid-cols-2 md:grid-cols-3 py-4">
                    <HostAmenities
                        onClick={(amenities) => {
                            setCustomValues('amenities', amenities)
                        }}
                        isSelected={amenities}
                    />
                </form>

                <h1 className="font-semibold text-xl pt-8">
                    Do you have any of these safety items?
                </h1>
                <form className="grid gap-2 grid-cols-2 md:grid-cols-3 py-4">
                    <Safety
                        onClick={(safety) => {
                            setCustomValues('safety', safety)
                        }}
                        isSelected={safety}
                    />
                </form>

            </div>
        )
    };

    //* STEP 8 IMAGES 
    if (steps === STEPS.IMAGES) {
        bodyContent = (
            <div className="imageAnimate overflow-y-scroll h-full">
                <title>Add some photos - ActiveBnb</title>
                <h1 className="font-semibold text-3xl md:text-4xl pb-2">
                    Add some photos of your cycladic home
                </h1>
                <span className="text-gray-500 text-xl font-light">
                    You&apos;ll need 5 photos to get started. You can add more or make changes later.
                </span>

                <form className="pt-8">
                    <ImageUpload
                        value={imageSrc}
                        onChange={(value) => {
                            setCustomValues('imageSrc', value)
                        }}
                    />
                </form>
            </div>
        )
    };

    //* STEP 9 SHORT DESC 
    if (steps === STEPS.SHORT_DESC) {
        bodyContent = (
            <div className="shortDescAnimate">
                <title>
                    Give your place a title - ActiveBnb
                </title>
                <section className="pb-8">
                    <h1 className="font-semibold text-3xl md:text-4xl pb-2">
                        Now, let&apos;s give your cycladic home a title
                    </h1>

                    <span className="text-gray-500 text-xl font-light">
                        Short titles work best. Have fun with it—you can always change it later.
                    </span>
                </section>

                <textarea
                    className="w-full p-6 text-2xl border border-gray-700 outline-gray-800 rounded-md h-[200px]"
                    maxLength={32}
                    {...register('shortDesc', { required: true })}
                />
            </div>
        )
    };
    //console.log(shortDesc);

    //* STEP 10 DESC 
    if (steps === STEPS.DESCRIPTION) {
        bodyContent = (
            <div className="descriptionAnimate w-full md:w-[700px]">
                <title>
                    Describe your place - ActiveBnb
                </title>
                <section className="pb-8">
                    <h1 className="font-semibold text-3xl md:text-4xl pb-2">
                        Create your description
                    </h1>

                    <span className="text-gray-500 text-xl font-light">
                        Share what makes your place special.
                    </span>
                </section>

                <textarea
                    className="w-full p-6 text-2xl border border-gray-700 outline-gray-800 rounded-md h-[200px]"
                    maxLength={500}
                    {...register('description', { required: true })}
                />
            </div>
        )
    };
    //console.log(description);

    //* STEP 11 THIRD_INTRO
    if (steps === STEPS.THIRD_INTRO) {
        bodyContent = (
            <div className="w-full">
                <HostGuide
                    step="Step 3"
                    title="Finish up and publish"
                    head="Tell us about your place - ActiveBnb"
                    desc="Finally, you'll choose booking settings, set up pricing, and publish your listing."
                    imgSrc="/House2.png"
                />
            </div>
        )
    };

    //* STEP 12 RESERVE_CONFIRM
    if (steps === STEPS.RESERVE_CONFIRM) {
        bodyContent = (
            <div className="w-full md:w-[60%]">
                <title>
                    Decide how you&apos;ll confirm reservations - ActiveBnb
                </title>
                <h1 className="titleTypeAnimate font-semibold text-3xl md:text-4xl pb-2">
                    Decide how you&apos;ll confirm reservations
                </h1>

                <HostConfirm
                    onClick={(confirm) => {
                        setCustomValues('confirm', confirm)
                    }}
                    isSelected={confirm}
                />
            </div>
        )
    };

    //* STEP 13 PRICE
    if (steps === STEPS.PRICE) {
        bodyContent = (
            <div className="titleTypeAnimate w-full relative flex justify-center h-[90dvh] md:h-full">
                <title>
                    Set your price - ActiveBnb
                </title>

                <section className="absolute left-0 top-0">
                    <h1 className="font-semibold text-3xl md:text-4xl pb-2">
                        Now, set your price
                    </h1>

                    <span className="text-gray-500 text-xl font-light">
                        You can change it anytime.
                    </span>
                </section>

                <form className="flex flex-col gap-2 justify-center items-center">
                    <div className="flex items-center gap-2 text-6xl md:text-9xl">
                        <h2>
                            $
                        </h2>
                        <input
                            type="number"
                            placeholder="100"
                            className="w-[150px] md:w-[300px] outline-none placeholder:text-gray-950"
                            {...register('price')}
                        />
                    </div>

                    <h2 className="text-xl font-light">
                        Guest price before taxes $76
                    </h2>
                </form>

            </div>
        )
    };

    //* STEP 14 CALENDER
    // if (steps === STEPS.CALENDER) {
    //     bodyContent = (
    //         <div>
    //             <section className="pb-4">
    //                 <h1 className="font-semibold text-3xl md:text-4xl pb-2">
    //                     Set your date and create your listing.
    //                 </h1>
    //                 <span className="text-gray-500 text-xl font-light">
    //                     You can change it anytime.
    //                 </span>
    //             </section>

    //             <Calendar
    //                 value={dateRange}
    //                 onChange={(value) => setDateRange(value.selection)}
    //             />
    //         </div>
    //     )
    // };





    //?  MAIN CONTENT ===================================>

    return (
        <LayoutHostModal
            body={bodyContent}
            disabled={isLoading}
            disabled2={isLoading2}
            onAction={handleSubmit(onSubmit)}
            onActionLabel={steps !== STEPS.PRICE ? 'Next' : 'Create'}
            secondaryAction={secondaryAction}
            secondaryActionLabel='Back'

        />
    )
}

export default HostingModal