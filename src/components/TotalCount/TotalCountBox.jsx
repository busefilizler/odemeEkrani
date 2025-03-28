import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";

export default function TotalCountBox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Box className="w-96" sx={{ minWidth: 375, minHeight: 560 }}>
      <Card className="p-5" variant="outlined">
        <CardContent className="!h-full">
          <div className="flex flex-row items-center justify-between">
            <Typography className="!font-semibold" sx={{ fontSize: 18 }}>
              Toplam Tutar
            </Typography>
            <Typography className="!font-semibold" sx={{ fontSize: 18 }}>
              1000 TL
            </Typography>
          </div>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "red",
                  "&.Mui-checked": {
                    color: "red",
                  },
                  opacity: isChecked ? 1 : 0.5,
                  transition: "opacity 0.3s",
                }}
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            }
            label="Ön bilgilendirme formunu ve Merafeli satış sözleşmesini okudum ve onaylıyorum."
            sx={{
              display: "flex",
              paddingTop: 3,
              flexDirection: "row",
              alignItems: "flex-start",
              opacity: isChecked ? 1 : 0.5,
              transition: "opacity 0.3s",
            }}
          />
        </CardContent>
        <CardActions>
          <Stack spacing={2} direction="row" className="!w-full">
            <Button
              variant="contained"
              disabled={!isChecked}
              className="!w-full"
              sx={{ width: "100%" }}
            >
              Ödeme Yap
            </Button>
          </Stack>
        </CardActions>
        <CardContent>
          <Typography className="!font-semibold" sx={{ fontSize: 18 }}>
            Sipariş Özeti
          </Typography>
          <Typography className="!font-normal" sx={{ fontSize: 12 }}>
            <div className="flex flex-row items-center justify-between pt-3">
              <div>Sipariş Tutarı (1 Ürün)</div>
              <div>1000 TL</div>
            </div>
            <div className="flex flex-row items-center justify-between pt-3 text-gray-400">
              <div>Kargo*</div>
              <div>Ücretsiz</div>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
