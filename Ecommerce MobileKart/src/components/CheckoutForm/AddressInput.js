import { Grid, TextField } from "@material-ui/core";
import {useFormContext, Controller} from "react-hook-form"

const AddressInput = ({name, label, required}) => {
    const { control } = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
              <Controller
            control={control}
            name={name}
            render = {({ field})=> (
                <TextField
                    fullWidth
                    label={label}
                    required
                />
            )}
         />
        </Grid>
    )
}

export default AddressInput