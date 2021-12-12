export const filterPayload = dataPayload => {
    // return the ones with DRM enabled (drm: true) and at least one episode (episodeCount > 0).
    let filteredContent = [];
    return filteredContent = dataPayload.payload
      .filter(item => item.drm === true)
      .filter(item => item.episodeCount > 0);
  };


  export const isValidJSONString =(str) =>{
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
  