import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const mockStore = {
  state: {
    search_list: [
      {
        image:
          "https://is2-ssl.mzstatic.com/image/thumb/Music118/…-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg",
        album: "In Between Dreams (Bonus Track Version)",
        artist: "Jack Johnson",
        price: 11.99
      },
      {
        image:
          "https://is3-ssl.mzstatic.com/image/thumb/Music5/v4…-b6e2-0c93-b5e5-b83031dd4e60/source/100x100bb.jpg",
        album: "Nothing But the Beat",
        artist: "David Guetta",
        price: 9.99
      },
      {
        image:
          "https://is4-ssl.mzstatic.com/image/thumb/Music123/…-31ed-c0ea-91e6-12052865fd20/source/100x100bb.jpg",
        album:
          "Jack Johnson and Friends: Sing-A-Longs and Lullabies for the Film Curious George",
        artist: "Jack Johnson",
        price: 9.99
      },
      {
        image:
          "https://is5-ssl.mzstatic.com/image/thumb/Music118/…-9051-c729-7761-3dfcc183333c/source/100x100bb.jpg",
        album: "Sleep Through the Static",
        artist: "Jack Johnson",
        price: 13.99
      },
      {
        image:
          "https://is1-ssl.mzstatic.com/image/thumb/Music3/v4…-228e-951b-9c91-8cf85e661b1c/source/100x100bb.jpg",
        album: "Skrillex and Diplo present Jack Ü",
        artist: "Jack Ü, Skrillex & Diplo",
        price: 9.99
      },
      {
        image:
          "https://is5-ssl.mzstatic.com/image/thumb/Music118/…-9a78-34e6-6491-3c54469c28ec/source/100x100bb.jpg",
        album: "To the Sea (Bonus Track Version)",
        artist: "Jack Johnson",
        price: 9.99
      }
    ],
    search_test: {
      resultCount: 3,
      results: [
        {
          wrapperType: "track",
          kind: "song",
          artistId: 909253,
          collectionId: 1469577723,
          trackId: 1469577741,
          artistName: "Jack Johnson",
          collectionName:
            "Jack Johnson and Friends: Sing-A-Longs and Lullabies for the Film Curious George",
          trackName: "Upside Down",
          collectionCensoredName:
            "Jack Johnson and Friends: Sing-A-Longs and Lullabies for the Film Curious George",
          trackCensoredName: "Upside Down",
          artistViewUrl:
            "https://music.apple.com/us/artist/jack-johnson/909253?uo=4",
          collectionViewUrl:
            "https://music.apple.com/us/album/upside-down/1469577723?i=1469577741&uo=4",
          trackViewUrl:
            "https://music.apple.com/us/album/upside-down/1469577723?i=1469577741&uo=4",
          previewUrl:
            "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/75/5a/fc/755afca1-d911-be2b-c0fb-f99d6d52ce1a/mzaf_4156076990936187406.plus.aac.p.m4a",
          artworkUrl30:
            "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/be/38/d0/be38d058-31ed-c0ea-91e6-12052865fd20/source/30x30bb.jpg",
          artworkUrl60:
            "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/be/38/d0/be38d058-31ed-c0ea-91e6-12052865fd20/source/60x60bb.jpg",
          artworkUrl100:
            "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/be/38/d0/be38d058-31ed-c0ea-91e6-12052865fd20/source/100x100bb.jpg",
          collectionPrice: 9.99,
          trackPrice: 1.29,
          releaseDate: "2006-02-06T08:00:00Z",
          collectionExplicitness: "notExplicit",
          trackExplicitness: "notExplicit",
          discCount: 1,
          discNumber: 1,
          trackCount: 14,
          trackNumber: 1,
          trackTimeMillis: 208643,
          country: "USA",
          currency: "USD",
          primaryGenreName: "Rock",
          isStreamable: true
        },
        {
          wrapperType: "track",
          kind: "song",
          artistId: 909253,
          collectionId: 1440857781,
          trackId: 1440857797,
          artistName: "Jack Johnson",
          collectionName: "In Between Dreams (Bonus Track Version)",
          trackName: "Good People",
          collectionCensoredName: "In Between Dreams (Bonus Track Version)",
          trackCensoredName: "Good People",
          artistViewUrl:
            "https://music.apple.com/us/artist/jack-johnson/909253?uo=4",
          collectionViewUrl:
            "https://music.apple.com/us/album/good-people/1440857781?i=1440857797&uo=4",
          trackViewUrl:
            "https://music.apple.com/us/album/good-people/1440857781?i=1440857797&uo=4",
          previewUrl:
            "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/d2/bf/ba/d2bfba21-a41e-c4f0-cfb7-c83420a77336/mzaf_3810532136343461295.plus.aac.p.m4a",
          artworkUrl30:
            "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/30x30bb.jpg",
          artworkUrl60:
            "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/60x60bb.jpg",
          artworkUrl100:
            "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/24/46/97/24469731-f56f-29f6-67bd-53438f59ebcb/source/100x100bb.jpg",
          collectionPrice: 11.99,
          trackPrice: 1.29,
          releaseDate: "2005-03-01T08:00:00Z",
          collectionExplicitness: "notExplicit",
          trackExplicitness: "notExplicit",
          discCount: 1,
          discNumber: 1,
          trackCount: 15,
          trackNumber: 4,
          trackTimeMillis: 208509,
          country: "USA",
          currency: "USD",
          primaryGenreName: "Rock",
          isStreamable: true
        },
        {
          wrapperType: "track",
          kind: "song",
          artistId: 909253,
          collectionId: 1440854851,
          trackId: 1440855248,
          artistName: "Jack Johnson",
          collectionName: "Sleep Through the Static",
          trackName: "Angel",
          collectionCensoredName: "Sleep Through the Static",
          trackCensoredName: "Angel",
          artistViewUrl:
            "https://music.apple.com/us/artist/jack-johnson/909253?uo=4",
          collectionViewUrl:
            "https://music.apple.com/us/album/angel/1440854851?i=1440855248&uo=4",
          trackViewUrl:
            "https://music.apple.com/us/album/angel/1440854851?i=1440855248&uo=4",
          previewUrl:
            "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/57/93/94/57939483-f16a-3fee-dd39-de7df73e8413/mzaf_5320784781866992253.plus.aac.p.m4a",
          artworkUrl30:
            "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/49/09/ff/4909ffd6-9051-c729-7761-3dfcc183333c/source/30x30bb.jpg",
          artworkUrl60:
            "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/49/09/ff/4909ffd6-9051-c729-7761-3dfcc183333c/source/60x60bb.jpg",
          artworkUrl100:
            "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/49/09/ff/4909ffd6-9051-c729-7761-3dfcc183333c/source/100x100bb.jpg",
          collectionPrice: 13.99,
          trackPrice: 1.29,
          releaseDate: "2008-02-01T08:00:00Z",
          collectionExplicitness: "notExplicit",
          trackExplicitness: "notExplicit",
          discCount: 1,
          discNumber: 1,
          trackCount: 14,
          trackNumber: 4,
          trackTimeMillis: 122694,
          country: "USA",
          currency: "USD",
          primaryGenreName: "Alternative",
          isStreamable: true
        }
      ]
    }
  },
  getters: {
    getSearchItemsList(state) {
      return state.search_list;
    }
  },
  mutations: {
    mutateSearchList(state, item) {
      var a = 0;
      state.search_list.forEach(element => {
        if (element.album === item.album) a++;
      });
      if (a == 0) state.search_list.push(item);
    },
    mutateDeleteItems(state) {
      if (state.search_list.length > 0) state.search_list.length = 0;
    }
  },
  actions: {
    addItem({ commit }, item) {
      commit("mutateSearchList", item);
    },
    deleteItems({ commit }) {
      commit("mutateDeleteItems");
    }
  },
  modules: {}
};
