import { Button } from "../styles/buttons";
import { Check, Error, Input2, TextArea } from "../styles/forms";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputGuests } from "../styles/venue";
import personIcon from "../../assets/images/person-icon.png";
import { useNavigate } from "react-router-dom";
import DocumentMeta from "react-document-meta";


const schema = yup
  .object().shape({
    name: yup
      .string()
      .required('Please enter name of venue')
      .typeError('Please enter name of venue')
      .min(3, "Must contain at least 3 characters"),
    description: yup
      .string()
      .required('Please enter a description')
      .typeError('Please enter a description')
      .min(10, "Must contain at least 10 characters")
      .max(2500, "Max 2500 characters"),
    media: yup
      .string()
      .when('media', {
        is: null || "",
        then: () => yup.string().nullable(),
        otherwise: () => yup.string().matches(/(http)?s?:?(\/\/[^"']*\.(?:jpg|jpeg|gif|png|svg))/, "Must be a direct image link")
      }),
    price: yup
      .number()
      .typeError('Please enter a number')
      .required('Please enter price per night')
      .min(1, "Must be at least 1 kr"),
    maxGuests: yup
      .number()
      .typeError('Please enter a number')
      .required('Please enter amount of guests')
      .min(1, "Must be at least 1 guest")
      .max(100, "Max 100 guests"),
    wifi: yup
      .boolean(),
    parking: yup
      .boolean(),
    breakfast: yup
      .boolean(),
    pets: yup
      .boolean(),
  }, [['media', 'media']])
  .required();

function NewVenue() {
  const navigate = useNavigate();

 const meta = {
  title: 'Holidaze | New Venue'
 }

 const { register, handleSubmit, formState: { errors }, reset } = useForm({
  resolver: yupResolver(schema),
});

const onSubmitHandler = async (e) => {
  const url = "https://api.noroff.dev/api/v1/holidaze/venues"
  const token = localStorage.getItem("Token");

  let newData = {};

  if(e.media !== ''){
   newData = {
      name: e.name,
      description: e.description,
      media: [e.media],
      price: e.price,
      maxGuests: e.maxGuests,
      meta: {
        wifi: e.wifi,
        parking: e.parking,
        breakfast: e.breakfast,
        pets: e.pets
      }
    };
  } else {
    newData = {
      name: e.name,
      description: e.description,
      price: e.price,
      maxGuests: e.maxGuests,
      meta: {
        wifi: e.wifi,
        parking: e.parking,
        breakfast: e.breakfast,
        pets: e.pets
      }
    };
  }


  const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(newData),
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json); //remove
    if ( json.id ) {
      reset();
      navigate(`/venue/${json.id}`);
    } else {
      alert(json.errors[0].message);
    }

  } catch (error) {
    console.log(error);
  }
};

    return (
      <>
        <DocumentMeta {...meta} />
        <main id="container p-5">
          <div className="d-flex justify-content-center mt-5">
            <div className='col-11 col-sm-9 col-xl-7 p-4'>
              <h1>Create a new venue</h1>
              <form onSubmit={handleSubmit(onSubmitHandler)}>
                  <div className="row flex-wrap">
                    <div className="col-12 col-md-6">
                      <div className="d-flex flex-column">
                        <label className="fs-5" htmlFor='name'>Name</label>
                        <Input2 id="name" {...register("name")} />
                        <Error>{errors.name?.message}</Error>
                      </div>
                      <div className="row flex-row">
                        <div className="pe-0 col">
                          <label className="fs-5" htmlFor='maxGuests'>Guests</label>
                            <InputGuests className='d-flex'>
                              <input id='maxGuests' {...register("maxGuests")} className='text-end' min={0} max={100} type='number' defaultValue={0}></input>
                              <img src={personIcon} alt='Person icon' />
                            </InputGuests>
                            <Error>{errors.maxGuests?.message}</Error>
                        </div>
                        <div className="col-12 col-sm-12">
                          <label className="fs-5" htmlFor='price'>Price</label>
                          <div className="d-flex">
                            <Input2 id="price" className="text-end fs-4" min={0} max={999999} type="number" defaultValue={0} {...register("price")} />
                            <span className="ms-1 fs-5">kr</span>
                          </div>
                          <Error>{errors.price?.message}</Error>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="d-flex flex-column">
                        <label className="fs-5" htmlFor='media'>Direct Image link (Generate on postimages.org) </label>
                        <Input2 id="media" title="A direct image link usually ends with '.jpg' or something similar" {...register("media")} />
                        <Error>{errors.media?.message}</Error>
                      </div>
                      <div className="d-flex gap-5 ms-1">
                        <div>
                          <div className="d-flex align-items-center">
                            <Check id="wifi" type="checkbox" {...register("wifi")}></Check>
                            <label className="fs-5 ms-2" htmlFor="wifi">Wifi</label>
                          </div>
                          <div>
                            <Check id="parking" type="checkbox" {...register("parking")}></Check>
                            <label className="fs-5 ms-2" htmlFor="parking">Parking</label>
                          </div>
                        </div>
                        <div>
                          <div>
                            <Check id="breakfast" type="checkbox" {...register("breakfast")}></Check>
                            <label className="fs-5 ms-2" htmlFor="breakfast">Breakfast</label>
                          </div>
                          <div>
                            <Check id="pets" type="checkbox" {...register("pets")}></Check>
                            <label className="fs-5 ms-2" htmlFor="pets">Pets</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column mt-3">
                    <label className="fs-5" htmlFor='description'>Description</label>
                    <TextArea id="description" {...register("description")} />
                    <Error>{errors.description?.message}</Error>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Button type="submit">Post</Button>
                  </div>
              </form>
            </div>
          </div>
        </main>
      </>
    )
  }

  export default NewVenue;