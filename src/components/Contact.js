import * as React from 'react'
import {Box} from "@mui/system";
import {FormControlLabel, TextField} from "@mui/material";
import {Button, Checkbox} from "rsuite";
import Typography from "@mui/material/Typography";

export default function Contact({ content, formContent, background }) {

    function handleSubmit() {

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
                                        <div className={item.alignImage === "left" ? "container-feature rowReverse" : "container-feature"}>
                                            <div data-current="Tabs" className="tabs tabs-wealth-feature w-tabs">
                                                <div className="max-width-small-slider">
                                                    <div className={`${item.commingSoon ? '' : 'hide'} bank-image-comming-soon`}>{item.offerText}</div>
                                                    <div className="money">
                                                        <h2 className="heading-style-h2 margin-bottom margin-small">{item.h1}&nbsp;
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
                                                >
                                                    <Typography className="formLabel" variant="h6" gutterBottom>
                                                        {formContent.field1}
                                                    </Typography>
                                                    <TextField
                                                        className="formInput"
                                                        margin="normal"
                                                        required
                                                        fullWidth
                                                        id="organization"
                                                        label="Organization name"
                                                        name="organization"
                                                        autoComplete="organization"
                                                        autoFocus
                                                    />
                                                    <Typography className="formLabel" variant="h6" gutterBottom>
                                                        {formContent.field2}
                                                    </Typography>
                                                    <TextField
                                                        className="formInput"
                                                        margin="normal"
                                                        required
                                                        fullWidth
                                                        name="link"
                                                        label="paste link here"
                                                        type="link"
                                                        id="community"
                                                        autoComplete="current-password"
                                                    />
                                                    <Typography className="formLabel" variant="h6" gutterBottom>
                                                        {formContent.field3}
                                                    </Typography>
                                                    <TextField
                                                        className="formInput"
                                                        margin="normal"
                                                        required
                                                        fullWidth
                                                        id="website"
                                                        label="paste link here"
                                                        name="website"
                                                        autoComplete="website"
                                                    />
                                                    <Typography className="formLabel" variant="h6" gutterBottom>
                                                        {formContent.field4}
                                                    </Typography>
                                                    <TextField
                                                        className="formInput message"
                                                        margin="normal"
                                                        required
                                                        fullWidth
                                                        size="medium"
                                                        id="info"
                                                        label="Write down your message..."
                                                        name="info"
                                                        multiline={true}
                                                        rows={6}
                                                        select={false}
                                                        autoComplete="website"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox value="remember" color="secondary" />}
                                                        label={formContent.checkbox}
                                                    />
                                                    <Button
                                                        type="text"
                                                        fullWidth
                                                        variant="contained"
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
