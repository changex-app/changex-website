import * as React from 'react'
import {useState} from "react";
import {Box} from "@mui/system";
import {FormControlLabel, TextField} from "@mui/material";
import {Button, Checkbox} from "rsuite";
import Typography from "@mui/material/Typography";


export default function Contact({ content, formContent, background }) {

    const [organizationName, setOrganizationName] = useState("")
    const [communityLink, setCommunityLink] = useState("")
    const [websiteLink, setWebsiteLink] = useState("")
    const [information, setInfomration] = useState("")
    const [checked, setChecked] = useState('false')

    const responseBody = {}

    const inputChangeHandler = (setFunction, event) => {
        setFunction(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        responseBody.organizationName = organizationName
        responseBody.communityLink = communityLink
        responseBody.websiteLink = websiteLink
        responseBody.information = information
        responseBody.checked = checked
        console.log(JSON.stringify(responseBody))
        console.log(checked)
    }

    return (
        <section id="contact" className={background}>
            <div>
                <div className="padding-global">
                    <div className="container-large">
                        <div className="features">
                            <h2 className="heading-style-h2">{content.head}</h2>
                            {content.feature.map((item, index) => {
                                return (
                                    <>
                                        <div className={item.alignImage === "left" ? "container-form rowReverse" : "container-form"}>
                                            <div data-current="Tabs" className="tabs tabs-partner-form w-tabs">
                                                <div className="">
                                                    <div className={`${item.commingSoon ? '' : 'hide'} bank-image-comming-soon`}>{item.offerText}</div>
                                                    <div className="money">
                                                        <h2 className="heading-style-h2 white margin-bottom margin-small">{item.h1}
                                                            <span className={`${item.commingSoon ? 'is-blue' : 'is-lime'}  heading-style-h2`}>{item.h2}</span>
                                                        </h2>
                                                        <p className={`${item.commingSoon ? '' : 'text-color-grey'} text-size-large `}>
                                                            {item.h3}
                                                        </p>
                                                        <p className="text-size-large text-color-grey">
                                                            {item.h4}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={item.alignImage === "left" ? "wrapper-left-image" : "wallet_wrapper-right"} >
                                                <form
                                                    onSubmit={handleSubmit}
                                                    noValidate
                                                    className="formPartner"
                                                >
                                                    <Typography className="formLabel" variant="h6" gutterBottom>
                                                        {formContent.field1}
                                                    </Typography>
                                                    <TextField
                                                        className="formInput"
                                                        margin="normal"
                                                        defaultValue=""
                                                        required
                                                        fullWidth
                                                        id="organization"
                                                        label="Organization name"
                                                        name="organization"
                                                        autoComplete="organization"
                                                        autoFocus
                                                        onChange={(e)=>inputChangeHandler(setOrganizationName, e)}
                                                    />
                                                    <Typography className="formLabel" variant="h6" gutterBottom>
                                                        {formContent.field2}
                                                    </Typography>
                                                    <TextField
                                                        className="formInput"
                                                        margin="normal"
                                                        defaultValue=""
                                                        required
                                                        fullWidth
                                                        name="link"
                                                        label="paste link here"
                                                        type="link"
                                                        id="community"
                                                        autoComplete="current-password"
                                                        onChange={(e)=>inputChangeHandler(setCommunityLink, e)}
                                                    />
                                                    <Typography className="formLabel" variant="h6" gutterBottom>
                                                        {formContent.field3}
                                                    </Typography>
                                                    <TextField
                                                        className="formInput"
                                                        margin="normal"
                                                        defaultValue=""
                                                        required
                                                        fullWidth
                                                        id="website"
                                                        label="paste link here"
                                                        name="website"
                                                        autoComplete="website"
                                                        onChange={(e)=>inputChangeHandler(setWebsiteLink, e)}
                                                    />
                                                    <Typography className="formLabel" variant="h6" gutterBottom>
                                                        {formContent.field4}
                                                    </Typography>
                                                    <TextField
                                                        className="formInput message"
                                                        margin="normal"
                                                        defaultValue=""
                                                        required
                                                        fullWidth
                                                        size="medium"
                                                        id="info"
                                                        label="Write down your message..."
                                                        name="info"
                                                        multiline={true}
                                                        rows={6}
                                                        select={false}
                                                        autoComplete="information"
                                                        onChange={(e)=>inputChangeHandler(setInfomration, e)}
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox value={checked} onChange={(e)=>setChecked(checked)} className="formCheckbox" />}
                                                        label={formContent.checkbox}
                                                    />
                                                    <Button
                                                        type="text"
                                                        className="formBtn"
                                                        fullWidth
                                                        variant=""
                                                        sx={{ mt: 3, mb: 2 }}
                                                    >
                                                        {formContent.buttonTxt}
                                                    </Button>
                                                </form>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
