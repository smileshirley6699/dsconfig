function getConfig() {
    let DEV_ENV = "DEV";
    if (process.env.VUE_APP_FLAG === DEV_ENV) {
        return {
            URL: "https://easy-mock.com/mock/5e69a2ecc945691e949c90ea/example/config",
            APP: "",
            TOKEN: ""
        };
    }
}
export default getConfig();
